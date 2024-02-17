// const { uploadFile } = require("./uploadController");
const dotenv = require('dotenv');
dotenv.config();
const { Web3 } = require("web3");
const contractAbi = require("../PatientRecords.json");
const web3 = new Web3(process.env.RPC);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

const getRecords = async (req, res) => {
    try {
        const userAddress = req.body.userAddress;
        console.log("this is the user address");
        console.log(userAddress);

        const records = await contract.methods.getAllRecordsForAddress(userAddress).call();

        const convertBigIntToString = obj => {
            if (typeof obj !== 'object' || obj === null) {
                return obj;
            }

            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (typeof obj[key] === 'bigint') {
                        obj[key] = obj[key].toString();
                    } else if (typeof obj[key] === 'object') {
                        obj[key] = convertBigIntToString(obj[key]);
                    }
                }
            }

            return obj;
        };

        const serializedRecords = (records ?? []).map(record => {
            return convertBigIntToString(record);
        });

        console.log(serializedRecords);
        res.send({ records: serializedRecords });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};


module.exports = {
    getRecords
};

