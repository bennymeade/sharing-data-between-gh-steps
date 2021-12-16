/* eslint-disable no-console */
const { exec } = require("child_process");

const resolvePercyTokens = () => {
  // exec(
  //     `set`,
  //     { env: { ...process.env, PERCY_TOKEN: `734573428736548273648723` } },
  //     (error, stdout, stderr) => {
  //       if (error) {
  //         console.error(`exec error: ${error}`);
  //         return;
  //       }
  //       console.log(`stdout: ${stdout}`);
  //       console.error(`stderr: ${stderr}`);
  //     }
  //   );
  fs = require("fs");
  fs.writeFile("temptokens.txt", "734573428736548273648723", function (err) {
    if (err) return console.log(err);
    console.log("Temp Tokens > temptokens.txt");
  });
};
resolvePercyTokens();
