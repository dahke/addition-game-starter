// truffle.js config for klaytn.
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'   // baobab 고유의 network id
const GASLIMIT = '20000000' // 배포하는 데에 들어가는 gas 한도
const URL = 'https://api.baobab.klaytn.net:8651'    // baobab test net
const PRIVATE_KEY = '0x769e1d7c7f46ea3d69f80047b134b5aa39432aecefb9f26dafba0fd6ca802b9d'

module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}