function email_val(email) {
  if (email.indexOf("@") <= 0) {
    console.log("Invalid @ position.");
  }
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    console.log("Invalid . position at 4");
  }
}

email_val("ed@ed.co");
