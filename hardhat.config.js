require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli:{
      url: process.env.INFURA_ENDPOINT_GOERLI,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
