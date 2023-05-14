const parse = function (width, text) {

  const lines = text.map((line) => {
    const separatedWidthOfEachChar = [];

    for (let i = 0; i < line.length; i += width) {
      separatedWidthOfEachChar.push(line.slice(i, i + width));
    }

    return separatedWidthOfEachChar;
  });

  const alphabets = [];

  for (let i = 0; i < lines[0].length; i++) {
    alphabets[i] = lines.map(e => e[i]);
  }

  return alphabets;
}

exports.parse = parse;