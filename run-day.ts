import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dirs = fs
  .readdirSync(__dirname)
  .filter((file) => fs.statSync(file).isDirectory())
  .sort();

// find the day specified in the command line (if supplied)
if (process.argv.length > 2) {
  const dir = dirs.find(
    (file) =>
      file === process.argv[2] || file.startsWith(`day${process.argv[2]}`) || file.startsWith(`day0${process.argv[2]}`),
  );
  if (dir) {
    import(`./${dir}/index.ts`);
  } else {
    console.log(`Day ${process.argv[2]} not found`);
  }
} else {
  //find all dirs that start with day
  const dayDirs = dirs.filter((file) => file.startsWith("day"));
  if (dayDirs.length) {
    import(`./${dayDirs[dayDirs.length - 1]}/index.ts`);
  } else {
    console.log("No day dirs found");
  }
}
