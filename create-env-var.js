/* eslint-disable no-console */
const { exec } = require('child_process');

const resolvePercyTokens = () => {
  if (process.env.PUBLICATION_UNDER_TEST.includes('www')) {
    // exec(
    //     `echo $PERCY_TOKEN`,
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
    exec(
      `export PERCY_TOKEN=${345634756384757760000000}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      }
    );
  }
};
resolvePercyTokens();
