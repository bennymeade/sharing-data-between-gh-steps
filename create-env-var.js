const resolvePercyTokens = () => {
  fs = require("fs");
  fs.writeFile("temptokens.txt", "734573428736548273648723", function (err) {
    if (err) return console.log(err);
    console.log("Temp Tokens > temptokens.txt");
  });
};
resolvePercyTokens();
