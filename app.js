const encode = require("./encoding");
const decode = require("./decoding");

const img_url = "https://image.flaticon.com/icons/svg/517/517563.svg";

const encodedData = encode(img_url);

decode(encodedData);
