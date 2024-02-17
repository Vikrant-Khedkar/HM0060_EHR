// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const Patient = artifacts.require("PatientRecords");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(Patient);
};
