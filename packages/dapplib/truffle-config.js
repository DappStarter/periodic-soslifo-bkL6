require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remind hospital inflict globe flower taste'; 
let testAccounts = [
"0x3b29f34db2b533daf9aa6d07132b53bc66329403b30f2a12e9731012642ad64e",
"0x22c2d18330c4a93637c5e68d9bf0cd6b6f9860ba6f9e7a1549f70855c3971a2f",
"0x1a8c8ed989b795bb57f6f87f13e177ac3496ec6fdedc1a6176e6485dc068b215",
"0xd0aa57a8f8b9efd3056484236485871a150ff0de4454de7ba2146ded135a0a63",
"0x20bd6d46f91869e1d1a778a67b8412dc2270da27b7219e7def54c837dc2f75bc",
"0xe98fd7c4631ac2918706b05620b8797ca7a5e2c7b54169c7262ff0a1b2869d59",
"0x06e55acbc1639240e609283fb500f583ccc1eb94612ce5527641e69e3684855a",
"0x6a2692c4dd6645e7ab30fd40742bea25a09739674b2cf1be5188e05ebeb62f22",
"0x648b9b6c0d57289da8d51127d2f36b1e51ae538a8e1e28dcbd31c4489964f889",
"0x19e4d5ae8355f06260e8b63edfb40db60da593ec83f80743f466d18341fb9853"
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

