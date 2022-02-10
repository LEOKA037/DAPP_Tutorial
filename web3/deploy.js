const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
  'lonely hurdle genuine arrow winter bridge orchard pair brisk start speed life',
  'https://rinkeby.infura.io/v3/9f4fd583576c4252a29e6ddc6786e733'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Contract is deployed by the manager with address ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data : '0x' + bytecode})
  .send({gas : '2000000', from : accounts[0]})

  console.log('Contract deployed to address', result.options.address);
  // 0xeA1BF8583173C3A06527a0ee62473C1Cf74D24c9
}


deploy();
