const fs = require("fs");
const dotenv = require('dotenv');
dotenv.config();
const { url } = require("inspector");
const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI(process.env.IPFS_API);

const uploadFile = async (_file, _fileName) => {
  try {
    const file = _file;
    console.log("________________________________________________________________")
    console.log(file);
    console.log("________________________________________________________________")

    const fileName = _fileName;
    const fileStream = fs.createReadStream(file.path);
    const formData = new FormData();
    formData.append('file',file) 
    try{
    const resFile = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_SECRET_API,
        "Content-Type": "multipart/form-data",
      },
    });
  }
  catch(error){
    console.error("Error uploading to IPFS",error)
  }
    const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

    const fileHash = fileAdded[0].hash;
    const fileUrl = `ipfs://${fileHash}`;
    return (ImgHash);

    // res.send({ url, fileName, fileHash });
    console.log(url, fileName, fileHash);
  } catch (error) {
    console.error("Error uploading file:", error);
    // res.status(500).send("Internal Server Error");
  }
};

module.exports = { uploadFile };
