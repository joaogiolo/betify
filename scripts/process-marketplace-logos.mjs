import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "images", "marketplaces");
const MAX_WIDTH = 1200;

fs.mkdirSync(outDir, { recursive: true });

async function capWidth(filePath) {
  const meta = await sharp(filePath).metadata();
  if ((meta.width ?? 0) <= MAX_WIDTH) return;
  const buffer = await sharp(filePath)
    .resize({ width: MAX_WIDTH, kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(filePath, buffer);
}

/**
 * Removes a (near-)white background and turns it into alpha, keeping the
 * original color of every non-white pixel intact — works for both
 * monochrome (black-on-white) and multi-color logos, since "whiteness" is
 * derived per-pixel from the darkest channel rather than from luminance.
 */
async function stripWhiteBackground(srcPath, outPath, { upscale = 1 } = {}) {
  const image = sharp(srcPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const srcAlpha = channels === 4 ? data[i * channels + 3] : 255;

    const whiteness = Math.min(r, g, b);
    const alpha = Math.round(((255 - whiteness) / 255) * srcAlpha);

    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }

  let pipeline = sharp(out, { raw: { width, height, channels: 4 } }).trim();

  if (upscale > 1) {
    const meta = await sharp(out, { raw: { width, height, channels: 4 } })
      .trim()
      .toBuffer({ resolveWithObject: true });
    pipeline = sharp(meta.data, {
      raw: {
        width: meta.info.width,
        height: meta.info.height,
        channels: 4,
      },
    }).resize(meta.info.width * upscale, meta.info.height * upscale, {
      kernel: sharp.kernel.lanczos3,
    });
  }

  await pipeline.png().toFile(outPath);
  console.log(`[logos] gerado: ${outPath}`);
}

async function trimAndCopy(srcPath, outPath, { upscale = 1 } = {}) {
  const trimmed = await sharp(srcPath).trim().toBuffer({ resolveWithObject: true });
  let pipeline = sharp(trimmed.data);

  if (upscale > 1) {
    pipeline = pipeline.resize(
      trimmed.info.width * upscale,
      trimmed.info.height * upscale,
      { kernel: sharp.kernel.lanczos3 }
    );
  }

  await pipeline.png().toFile(outPath);
  console.log(`[logos] gerado: ${outPath}`);
}

async function main() {
  const jobs = [
    { name: "shopee" }, // already transparent + colorful, just trim
    { name: "shein", hasWhiteBg: true }, // black wordmark on white
    { name: "tiktok", hasWhiteBg: true }, // colorful mark on white
    { name: "mercadolivre", upscale: 3 }, // already transparent, just low-res
  ];

  for (const job of jobs) {
    const src = path.join(root, `${job.name}.png`);
    if (!fs.existsSync(src)) {
      console.log(`[logos] arquivo não encontrado, pulando: ${src}`);
      continue;
    }
    const out = path.join(outDir, `${job.name}.png`);

    if (job.hasWhiteBg) {
      await stripWhiteBackground(src, out);
    } else {
      await trimAndCopy(src, out, { upscale: job.upscale ?? 1 });
    }

    await capWidth(out);
  }
}

main().catch((err) => {
  console.error("[logos] erro:", err);
  process.exit(1);
});
