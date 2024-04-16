function validatePassword(string) {
  if (string.length < 8) return false;

  const hasUpperCase = string
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  //? 'A' === 'A'.toUpperCase() is true while 'A' !== 'A'.toLowerCase() is true so "A" is UpperCase

  if (!hasUpperCase) return false;

  const hasLowerCase = string
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  //? 'a' === 'a'.toLowerCase() is true while 'a' !== 'a'.toUpperCase() is true so "A" is LowerCase

  if (!hasLowerCase) return false;

  const hasDigit = string.split("").some((char) => !isNaN(parseInt(char)));

  if (!hasDigit) return false;
  return true;
}

module.exports = validatePassword;
