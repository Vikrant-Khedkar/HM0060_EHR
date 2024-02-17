const { Web3 } = require("web3");
const contractAbi = require("../PatientRecords.json");
const dotenv = require('dotenv');
dotenv.config();
const web3 = new Web3(process.env.INFURA_RPC)
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

const senderAddress = "0x7d2A3CFd66373BeD7DA1f37Df9aCdBF822330a6a";
const privateKey = "0x97018b879227f5c993440ed1d04f957a8e5aa2e7e925c2594d55b065be448c92";
const senderAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(senderAccount);

const addPatient = (req, res) => {
  
    try{
    console.log("INNNNNNNNNNNNNNNNNNNNNNNNNN");
    const account_address = senderAddress;
    const username = req.body.username;
    const patientName = req.body.patientName;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const created_at = new Date().toISOString();
  
    const data = [account_address,username,patientName,gender,dob,created_at];
    console.log(data)
    console.log("________________________________________________");
  
    contract.methods
      .addPatient(...data)
      .send({ from: senderAccount.address, gas: 3000000})
      .on("transactionHash", (hash) => {
        console.log("Transaction Hash:", hash);
      })
      .on("receipt", (receipt) => {
        console.log("Transaction Receipt:", receipt);
      })
      .on("error", (error) => {
        console.error("Error:", error);
      });
      console.log(data)
    res.send({"Message":"Added Patient✨","Data":data});
    console.log("HELOOOOOOOOOWWWWWW");

    }
    catch (error) {
      console.error(error);
      res.status(500).send({ "Message": "Error adding record" });
  }
};

module.exports = { addPatient };
