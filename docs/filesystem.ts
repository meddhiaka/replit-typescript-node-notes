import fs from "fs";

export default async function FileSystemTest() {
  console.log("seeing the pathname:");
  console.log(import.meta.dirname);

  console.log("")
  
  console.log("seeeing the file name:");
  console.log(import.meta.filename);

  console.log("")

  console.log("seeing the file content, if you add utf8 prop it will transform to a Buffer file: ")
  const file = await fs.promises.readFile(`${import.meta.dirname}/fs/hello.txt`);
  console.log(file)

  console.log("");

  const newFile = await fs.promises.writeFile(`${import.meta.dirname}/fs/hello.txt`, file.toString() + "\nnew line");
  console.log(newFile);
}