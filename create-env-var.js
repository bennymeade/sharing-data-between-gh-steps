/* eslint-disable no-console */
const { exec } = require('child_process');

const resolvePercyTokens = () => {
    exec(
        `set`,
        { env: { ...process.env, PERCY_TOKEN: `734573428736548273648723` } },
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);
        }
      );
};
resolvePercyTokens();
