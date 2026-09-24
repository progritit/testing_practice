// src/caesarCipher.js

function shiftCharacter(character, shiftFactor) {
  const code = character.charCodeAt(0);

  let base;

  if (code >= 65 && code <= 90) {
    base = 65;
  } else if (code >= 97 && code <= 122) {
    base = 97;
  } else {
    return character;
  }

  const normalizedShift = ((shiftFactor % 26) + 26) % 26;

  const shiftedCode =
    ((code - base + normalizedShift) % 26) + base;

  return String.fromCharCode(shiftedCode);
}

export function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((character) => shiftCharacter(character, shiftFactor))
    .join("");
}