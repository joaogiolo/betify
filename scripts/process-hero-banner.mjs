import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "fundohero.png");
const out = path.join(root, "public", "images", "hero-banner.webp");

async function main() {
  if (!fs.existsSync(src)) {
    console.log(`[hero-banner] Arquivo não encontrado: ${src}`);
    return;
  }

  fs.mkdirSync(path.dirname(out), { recursive: true });

  await sharp(src).webp({ quality: 82 }).toFile(out);

  console.log(`[hero-banner] Gerado: ${out}`);
}

main().catch((err) => {
  console.error("[hero-banner] Erro:", err);
  process.exit(1);
});
