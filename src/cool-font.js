const write = function (sentence, characterFonts) {
  const characterSymbols = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "?"
  ];

  const alphabetsLookup = {};

  for (let i = 0; i < characterSymbols.length; i++) {
    alphabetsLookup[characterSymbols[i]] = characterFonts[i];
  }

  const sentenceUsingCoolFont = sentence.split("").map(char => alphabetsLookup[char]);

  const lines = [];

  for (let i = 0; i < sentenceUsingCoolFont[0].length; i++) {
    lines[i] = sentenceUsingCoolFont.map(e => e[i]);
  }

  return lines.map(e => e.join("")).join("\n");
}

exports.write = write;