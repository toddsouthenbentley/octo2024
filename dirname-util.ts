import { fileURLToPath } from "url";
import { dirname } from "path";

export function getDirname(metaUrl: string): { __dirname: string; __filename: string } {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = dirname(__filename);
  return { __dirname, __filename };
}
