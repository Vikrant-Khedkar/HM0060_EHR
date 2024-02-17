const dotenv = require("dotenv")
dotenv.config()
const { uploadFile } = require("./uploadController");
const { Web3 } = require("web3");
const contractAbi = require("../PatientRecords.json");
const web3 = new Web3(process.env.INFURA_RPC);
const contractAddress = process.env.CONTRACT_ADDRESS
const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);
const crypto = require('crypto');
const multer = require("multer")

const upload = multer({ dest: "./uploads/" });
function generateUInt256UUID() {
    const buffer = crypto.randomBytes(32);
    return buffer.toString('hex');
}

const addRecord = async (req, res) => {

    try {
        const id = generateUInt256UUID();
        console.log("NOOOOOOOOOOOOOOOOO----" + id)
        const user_address = req.body.user_address;
        const title = req.body.recordName;
        const date = parseInt(req.body.date);
        const filename = req.body.fileName;
        // const file = req.file;
        const created_at = new Date().toISOString();
        console.log("Date is of type: ", typeof (date));
        const file = await uploadFile(req.file, req.body.filename);
        console.log('filee has been found: ', req.file);
        const data = [id, user_address, title, date, filename, file, created_at];
        console.log("data: ", data);
        contract.methods
            .addRecord(...data)
            .send({ from: user_address, gas: 3000000 })
            .on("transactionHash", (hash) => {
                console.log("Transaction Hash:", hash);
            })
            .on("receipt", (receipt) => {
                console.log("Transaction Receipt:", receipt);
            })
            .on("error", (error) => {
                console.error("Error:", error);
            });

        res.send({ "Message": "Added Record✨", "Data": data });
        console.log("Added Record");
    } catch (error) {
        console.error(error);
        res.status(500).send({ "Message": "Error adding record" });
    }
};

module.exports = { addRecord };


