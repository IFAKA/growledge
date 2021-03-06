const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: keys.MNEMONIC,
          },
          providerOrUrl: `https://ropsten.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
          addressIndex: 0,
        }),
      network_id: 3,
      gas: 2500000, // Gas limit. how much gas we are willing to spend.
      // To know how much gas you should spend, copy contract,
      // deploy it in remix and check the gas used and double the value.
      gasPrice: 41000000000, // how much gas we are willing to spend for unit of gas
      confirmations: 2, //Number of blocks between deployment
      timeoutBlocks: 200, // Number of blocks before deployment times out
    },
    // live: {
    //   provider: () =>
    //     new HDWalletProvider({
    //       mnemonic: {
    //         phrase: keys.MNEMONIC,
    //       },
    //       providerOrUrl: `https://mainnet.infura.io/v3/${keys.INFURA_PROJECT_ID}`,
    //       addressIndex: 0,
    //     }),
    //   network_id: 1,
    //   gas: 5500000, // Gas limit. how much gas we are willing to spend.
    //   // To know how much gas you should spend, copy contract,
    //   // deploy it in remix and check the gas used and double the value.
    //   gasPrice: 20000000000, // how much gas we are willing to spend for unit of gas.
    //   // You can also check etherscan and put a higher value than you see.
    //   confirmations: 2, //Number of blocks between deployment
    //   timeoutBlocks: 200, // Number of blocks before deployment times out,
    //   skipDryRun: true,
    // },
  },
  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
};

// transaction hash:    0xeaf882f6675ce2723f938f886c4b171d95995733bffa1983efeee045ca5ed09f
// contract address:    0x6AD83727Cc8103482b872c5e78c3a14Adb0542bD

// BASE FEE (determnd by ethereum) => 39.791392694

// Max Priority Fee Per Gas(tip) => 2

// GAS PRICE = BASE FEE + TIP => 41.791392694

// GAS USED 21000

// Transaction Fee = GAS USED * GAS PRICE =
//                   41.791392694 * 21000

// BURNT FEE => BASE FEE * GAS USED
//           39.791392694 * 21000

// REST TO MINER => TIP * GAS USED
//                   2  * 21000
