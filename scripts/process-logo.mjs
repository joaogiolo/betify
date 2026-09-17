import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const candidates = ["logo.png", "logo-betini.jpeg", "logo-betini.jpg"];
const src = candidates
  .map((name) => path.join(root, name))
  .find((p) => fs.existsSync(p));
const outDir = path.join(root, "public", "images");

async function main() {
  if (!src) {
    console.log(
      `[process-logo] Nenhum arquivo de origem encontrado (${candidates.join(", ")}). Pulei o processamento — usando placeholders.`
    );
    return;
  }

  fs.mkdirSync(outDir, { recursive: true });

  const image = sharp(src).ensureAlpha();
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const luminance = (r + g + b) / 3;

    out[i * 4] = 244;
    out[i * 4 + 1] = 244;
    out[i * 4 + 2] = 240;
    out[i * 4 + 3] = Math.round(luminance);
  }

  const fullPath = path.join(outDir, "logo-betini-full.png");
  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(fullPath);

  const trimmedMeta = await sharp(fullPath).metadata();
  const fullWidth = trimmedMeta.width ?? width;
  const fullHeight = trimmedMeta.height ?? height;

  // Find the first horizontal gap (a band of near-zero alpha rows) below the
  // monogram — that's the boundary between the mark and the wordmark below it.
  const { data: fullData, info: fullInfo } = await sharp(fullPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rowAlpha = new Array(fullInfo.height).fill(0);
  for (let y = 0; y < fullInfo.height; y++) {
    let sum = 0;
    for (let x = 0; x < fullInfo.width; x++) {
      sum += fullData[(y * fullInfo.width + x) * fullInfo.channels + 3];
    }
    rowAlpha[y] = sum;
  }
  const maxRowAlpha = Math.max(...rowAlpha);
  const threshold = maxRowAlpha * 0.002;

  let markEnd = Math.round(fullHeight * 0.3);
  let sawContent = false;
  for (let y = 0; y < fullInfo.height; y++) {
    const hasContent = rowAlpha[y] >= threshold;
    if (hasContent) {
      sawContent = true;
    } else if (sawContent) {
      markEnd = y;
      break;
    }
  }

  const markPath = path.join(outDir, "logo-betini-mark.png");
  const markExtract = await sharp(fullPath)
    .extract({
      left: 0,
      top: 0,
      width: fullWidth,
      height: Math.min(markEnd, fullHeight),
    })
    .png()
    .toBuffer();

  await sharp(markExtract).trim().png().toFile(markPath);

  console.log(`[process-logo] Gerado: ${fullPath}`);
  console.log(`[process-logo] Gerado: ${markPath}`);
}

main().catch((err) => {
  console.error("[process-logo] Erro:", err);
  process.exit(1);
});
