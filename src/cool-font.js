const convertToCoolString = function (height, sentence, coolFonts) {
  const symbols = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "?"
  ];

  const symbolLookup = Object.fromEntries(symbols.map((symbol, i) => [symbol, coolFonts[i]]));

  const sentenceUsingCoolFont = sentence.split("").map(symbol => symbolLookup[symbol]);

  const lines = [];
  for (let i = 0; i < height; i++) {
    lines[i] = sentenceUsingCoolFont.map(e => e[i]);
  }

  return lines.map(line => line.join("")).join("\n");
}

exports.write = convertToCoolString;