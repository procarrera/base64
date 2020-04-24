module.exports = async function decode(data) {
  var b64string = await data;
  var fileDataDecoded = Buffer.from(b64string, "base64"); // Ta-da
  return fileDataDecoded;
};
