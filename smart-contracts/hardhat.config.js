require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "klatyn",
  networks: {
    klatyn: {
      url: "https://api.baobab.klaytn.net:8651/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1001,
    },
  },
};
