require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/JBpwwLIgR7T659TBgfYjupGfrvbz__RK",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },

  paths: {
    artifacts: "./artifacts",
  },
};
