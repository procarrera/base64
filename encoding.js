const image2base64 = require("image-to-base64");

module.exports = async function encode(img_url) {
  const result = await image2base64(img_url);
  return result;
};
