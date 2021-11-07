require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stool rival meadow horn install basket force gauge'; 
let testAccounts = [
"0x4c27ba8ce436303f21de1b9997429aefe8c1cd69ca2aeb6220bfca5e497b7666",
"0x9fcb5bc3764752515c18a46179e4103acbb65d77b2d8454c6aa95d6133e3ddbf",
"0x83bbb1ce7f99cd86774a6a78f6bf7e7b5e65104b994a1d089d0626740bcdf4eb",
"0x4bcafaceed906323cf8f64f5d89aa51c9e55e197cbe8ec0ade7e67568dea4c6d",
"0xe8ef33e06753d991e1f9368043496f3a193c3b6e7ec74085457c2273d606f5a5",
"0xc5dc0f37b2229b79e645fd3626378da7713901a29aac2da960952c63f96cb6eb",
"0xe2dbe1f09cf83852d8a91a298fe60d0be23a78f3e437cf0944212b79419be1ce",
"0x3b4b8ead02c22d3d45e85c567184d030c3fd633fc269360eada564b76134f473",
"0x7c9ef83ccbbb7b523e0e1784af90d0d54f7ed95d9b6833051000cc80c5430a2f",
"0x1b72a01d28ac108ebf58112699927ebb2e14375222dc3671b2cfecbebe498254"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

