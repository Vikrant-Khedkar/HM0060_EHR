const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = ''
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*"        // Any network (default: none)
    },

    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, 'https://sepolia.infura.io/v3/d2ed4c2ce04d41f788c993d96b98da56'),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  }
}