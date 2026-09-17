import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public", "images");

export const hasFullLogo = fs.existsSync(
  path.join(publicDir, "logo-betini-full.png")
);
export const hasMarkLogo = fs.existsSync(
  path.join(publicDir, "logo-betini-mark.png")
);
