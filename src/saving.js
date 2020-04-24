const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

const local = path.join(__dirname, "/images");

module.exports = async function saving(decoded_file) {
  var token = crypto.randomBytes(8).toString("hex");
  await fs.mkdirSync(local, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.writeFile(
    local + "/" + token + ".svg",
    await decoded_file,
    "binary",
    function (err) {
      console.log(err); // writes out file without error, but it's not a valid image
    }
  );
  return console.log(token);
};
