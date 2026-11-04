const bcrypt = require("bcryptjs");

const password = "YOUR_NEW_PRIVATE_PASSWORD";
const hash = "PASTE_YOUR_GENERATED_HASH_HERE";

async function verify() {
  const isValid = await bcrypt.compare(password, hash);

  console.log("Password and hash match:", isValid);
}

verify();