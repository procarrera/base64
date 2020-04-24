module.exports = async function decode(data) {
  var b64string = await data;
  var fileDataDecoded = Buffer.from(b64string, "base64"); // Ta-da
  return fileDataDecoded;
  /* fs.writeFile("out.svg", fileDataDecoded, "binary", function (err) {
      console.log(err); // writes out file without error, but it's not a valid image
    });*/
};
