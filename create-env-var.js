/* eslint-disable no-console */
const { exec } = require('child_process');

const resolvePercyTokens = () => {
  if (!process.env.PUBLICATION_UNDER_TEST.includes('www')) {
    exec(
        `echo resolving PERCY_TOKEN`,
        { env: { ...process.env, PERCY_TOKEN: `${dataFiltered[0].percyToken}` } },
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
