import { exec } from "child_process";

export default function ExecShell() {
  console.log("Executing some commands: ");
  console.log("");

  console.log("ls -la");
  exec("ls -la", (error, stdout, stderr) => {
    console.log(stdout);
    
    console.log("");

    console.log("cd fs && pwd");
    exec("cd docs/fs && pwd", (error, stdout, stderr) => {
      console.log(stdout);
    
      console.log("");

      console.log("cat hello.txt");
      exec("cat docs/fs/hello.txt", (error, stdout, stderr) => {
        console.log(stdout);
      });
    });
  });
}
