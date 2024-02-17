const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");

const uploadFile = async (_file, _fileName) => {
  try {
    const file = _file;
    const fileName = _fileName;
    console.log("PINATA_API_KEY:", "hello");
    console.log("PINATA_SECRET_API_KEY:", "you");
    const formData = new FormData();

    formData.append('file', fs.createReadStream(file.path), fileName);

    const resFile = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      headers: {
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
        ...formData.getHeaders(), 
      },
    });

    console.log(resFile.data);

    console.log(`https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`)
    return `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
  } catch (error) {
    console.error("Error uploading file to IPFS:", error);
    throw error;
  }
};

module.exports = { uploadFile };
