const fs = require("fs");
const { write } = require("./src/cool-font");
const { parse } = require("./src/parse-fonts");

const main = function () {
  const content = fs.readFileSync("./data/demo-input", "utf-8");

  const [width, height, sentence, ...rawAlphabets] = content.split("\n");

  const alphabets = parse(+width, rawAlphabets);

  console.log(write(sentence, alphabets));
}

main();