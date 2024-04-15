function validateEmail(email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") !== 0 &&
    email.indexOf("@") !== email.length - 1 &&
    email.indexOf(".") !== 0 &&
    email.indexOf(".") !== email.length - 1
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = validateEmail;
