import cardsData from './cards.json';

/* eslint-disable import/prefer-default-export */

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    cryptoWaterMargin: '0xd0792ac0de7ef31197c5f452b21a34389ecc725f',
    convert: '0x0297fdbcb9c2023bc05ad44c9f6e69b0ae6261ce',
    luckyPackage: '0x8b481c5af4734501ea8b6a0c3502e001dd883d3d',
    ERC721Full: '0x60F1D406565ED9550cDAD4CDa42DeA9931b0244c',
    Billboard: '0x6b098fA6B11A7017671eC1Cb206130a198c87b4F',    
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    cryptoWaterMargin: '',
  },
  3: {
    default: true, // It will be used when no metaMask
    name: 'Ropsten Test Network',
    cryptoWaterMargin: '0xD62ccC23C5e1Db41C017913303bdB09e570284f6',
    convert: '0xE3F437609E97246734aa6A550E407E14dB2f53b1',
    luckyPackage: '0xDC060a83C8A81a029676e85DEe8c0D090b52F2dD',
    DecentralizedExchangeHotPotato: '0x4a11d94715194d602f9ec570e446e33bf9e41fed',
    ERC721Full: '0x60F1D406565ED9550cDAD4CDa42DeA9931b0244c',
    Billboard: '0x6b098fA6B11A7017671eC1Cb206130a198c87b4F',
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    cryptoWaterMargin: '',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    cryptoWaterMargin: '0x23f9d870fbee3161443d9898d0c494ce0416b886',
    luckyPackage: '0xb760ada4f12e5d29eff2d9eef3bca94b574a1f2f',
    convert: '0xb55edc9c72d56447d6d1ea2476bcb42e74df16cf',
    DecentralizedExchangeHotPotato: '0xac7e1a3263e06329eee8ac5b45f3ac2223119779',
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

export const cards = cardsData;

export const i18n = [
  {
    langDisplay: '中文',
    locale: 'zh',
    aliases: ['zh', 'zh-cn', 'zh-hk', 'zh-sg', 'zh-tw'],
  },
  {
    langDisplay: 'English',
    locale: 'en',
    aliases: ['en', 'en-us', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-zw'],
  },
  {
    langDisplay: '日本語',
    locale: 'jp',
    aliases: ['jp', 'ja', 'ja-jp'],
  },
];


/*

   Deploying 'ERC721Full'
   ----------------------
   > transaction hash:    0x5c79e29f73c9d7dc672f0feb1d3cce9b84f66d440297dd06b88ec27cb2c6890b
   > Blocks: 1            Seconds: 49
   > cryptoWaterMargin address:    0x60F1D406565ED9550cDAD4CDa42DeA9931b0244c
   > block number:        6471813
   > block timestamp:     1569617951
   > account:             0xE8B21A66d89401254045bAb95B474B52B6faC351
   > balance:             6.351285972
   > gas used:            2365727
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04731454 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 6471814)
   > confirmation number: 2 (block: 6471815)
0x60F1D406565ED9550cDAD4CDa42DeA9931b0244c
0xcEB8dE81eb8Cfa9ECFA36a3fAc625643d39d31fd

   Deploying 'Billboard'
   ---------------------
   > transaction hash:    0xd76b25ed3be6c640a6fd65b603f6cdd9db9ba2169952fe9ace087a4c8bb57493
   > Blocks: 1            Seconds: 25
   > cryptoWaterMargin address:    0x6b098fA6B11A7017671eC1Cb206130a198c87b4F
   > block number:        6471817
   > block timestamp:     1569618043
   > account:             0xE8B21A66d89401254045bAb95B474B52B6faC351
   > balance:             6.296562652
   > gas used:            2736166
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05472332 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 6471818)
   > confirmation number: 2 (block: 6471819)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10203786 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.10773602 ETH

MacBook-Pro-6:Ethereum minakokojima$ 
*/