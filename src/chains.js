import Web3 from 'web3';

import contract from 'truffle-contract';
import artifacts from './contracts_deployed/MedicalData.json' assert { type: 'json' };


const urlChain1 = 'http://localhost:8545';
const urlChain2 = 'http://localhost:8546';

const smartContract1 = '0xdf0ab33e6cc9cbbcfaa8c87f5cf02aa50ab5a095';
const smartContract2 = '0x52faf500a811bd87ecc618c51c1f35a16cb5150f';

let chain1, chain2;

// Parte 1
if (typeof chain1 !== 'undefined') {
    let chain1 = new Web3(chain1.currentProvider)
  } else {
    chain1 = new Web3(new Web3.providers.HttpProvider(urlChain1))
}

if(typeof chain2 !== 'undefined') {
    let chain2 = new Web3(chain2.currentProvider)
}
else {
    chain2 = new Web3(new Web3.providers.HttpProvider(urlChain2))
}

// Parte 2
const LMS1 = contract(artifacts)
LMS1.setProvider(chain1.currentProvider);

const LMS2 = contract(artifacts)
LMS2.setProvider(chain2.currentProvider);

// Parte 3
const accounts1 = await chain1.eth.getAccounts();
const lms1 = await LMS1.at(smartContract1);

const accounts2 = await chain2.eth.getAccounts();
const lms2 = await LMS2.at(smartContract2);

export {accounts1, lms1, accounts2, lms2};

