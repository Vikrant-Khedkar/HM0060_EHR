# [HM0060] [CodeBlockers]

## [Develop a solution to safeguard the security and privacy of Electronic Health Records (EHRs) to keep sensitive patient information safe.]

## Description
A decentralized EHR system to store and manage personal health care records on Ethereum using IPFS

## Features
- Add records
- Display records
- Login with metamask
- Share records

## Tech Stack
- Next.js.
- Express.js
- Solidity
- Truffle
- Ganache
- IPFS(Pinata)
- Infura

## Screenshots
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/dee3c903-acd4-4971-9f3e-580d18c52bdf)
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/6370fc62-e310-4c5d-ad2c-d9a2ba41c791)
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/35ca5f5f-c245-42f0-8ba2-cb943cfc0636)
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/38bbec33-14a5-451f-ab6e-d5f4bb4dcc8a)
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/ac06bb51-2afe-409d-8245-b9c180048f71)
![image](https://github.com/Vikrant-Khedkar/HM0060_EHR/assets/64966091/5fc7708f-8ce1-4c0b-a1f2-b21042a755a6)



## Deployed Url
The project is based on Ethereum so you have to set up local Ganache node to run the project. 
https://sepolia.etherscan.io/address/0x1fff1024bb2874b0a098e3049ff062078e347f44
## Local Setup 
- 1.Clone the project 
- 2.Download Ganache and setup an environment
- 3.Go inside the contract folder and enter npm install -g truffle
- 4.Run truffle compile and then truffle deploy (make sure the truffle-config has correct ganache URLs)
- 5.Once the contract is deployed copy the contract address and paste it inside the env file in place of L_CONTRACT_ADDRESS
CONTRACT_ADDRESS = 0x1fff1024bB2874b0a098e3049Ff062078e347F44
L_CONTRACT_ADDRESS = 0xB683c1389E488F42dd81e8A0C28D785CA4A26Ff2
IPFS_API = /ip4/127.0.0.1/tcp/5001
RPC = HTTP://127.0.0.1:7545 // Ganache url
INFURA_API = 'https://sepolia.infura.io/v3/YOUR_API_KEY'
PINATA_API_KEY = "KEY"
PINATA_SECRET_API_KEY = "SECRET"
- 6. Import a account from ganache in the metamask
- 7. Then go inside the client and run yarn and then yarn dev
- 8.Then in server run npm install and put the env file form above and run npm start then you are good to go.

## Video Url
[Link to Demo Video](https://drive.google.com/file/d/1G5wTlxUuYusq-ePeL_1lQ_z6787SDEsx/view?usp=sharing)

## Remarks
- 7620845369 contact if any issues
