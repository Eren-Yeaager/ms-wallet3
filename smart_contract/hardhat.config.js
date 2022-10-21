//https://eth-goerli.g.alchemy.com/v2/rYOBPazBUisndvm-bTfvUdnvXF-FWYRV
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rYOBPazBUisndvm-bTfvUdnvXF-FWYRV",
      accounts: [process.env.SECRET_KEY],
    },
  },
};
