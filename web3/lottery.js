import web3 from './web3.js';
const address = '0xeA1BF8583173C3A06527a0ee62473C1Cf74D24c9';
const abi =  [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","ty
pe":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"i
nputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enterLottery","outputs":[],"payable"
:true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

export default new web3.eth.Contract(abi,address);
