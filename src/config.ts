import { ChainId } from '@uniswap/sdk';
import { Configuration } from './bcash/config';
import { BankInfo } from './bcash';
import { formatUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.MAINNET,
    etherscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bcash/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      BUSD: ['0xe9e7cea3dedca5984780bafc599bd69add087d56', 18],
      'BCASH_BUSD-CAKE-LPv2': ['0xd4405F0704621DBe9d4dEA60E128E0C3b26bddbD', 18],
      'BSHARE_BUSD-CAKE-LPv2': ['0x0379dA7a5895D13037B6937b109fA8607a659ADF', 18],
    },
    baseLaunchDate: new Date('2021-01-12T00:00:00Z'),
    bondLaunchesAt: new Date('2021-01-12T00:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-20T00:00:00Z'),
    refreshInterval: 13600,
    gasLimitMultiplier: 1.0,
  },
  production: {
    chainId: ChainId.MAINNET,
    etherscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bcash/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      BUSD: ['0xe9e7cea3dedca5984780bafc599bd69add087d56', 18],
      'BCASH_BUSD-CAKE-LPv2': ['0xd4405F0704621DBe9d4dEA60E128E0C3b26bddbD', 18],
      'BSHARE_BUSD-CAKE-LPv2': ['0x0379dA7a5895D13037B6937b109fA8607a659ADF', 18],
    },
    baseLaunchDate: new Date('2021-01-12T00:00:00Z'),
    bondLaunchesAt: new Date('2021-01-12T00:00:00Z'),
    boardroomLaunchesAt: new Date('2021-01-20T00:00:00Z'),
    refreshInterval: 13600,
    gasLimitMultiplier: 1.0,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  BCASHBUSDPool: {
    name: 'Earn BCASH by BUSD',
    contract: 'BCASHBUSDPool',
    depositTokenName: 'BUSD',
    earnTokenName: 'BCASH',
    finished: false,
    sort: 1,
  },
  BCASHWBNBPool: {
    name: 'Earn BCASH by WBNB',
    contract: 'BCASHWBNBPool',
    depositTokenName: 'WBNB',
    earnTokenName: 'BCASH',
    finished: false,
    sort: 2,
  },
  BUSDBCASHLPTokenSharePool: {
    name: 'Earn BSHARE by BCASH-BUSD-LP',
    contract: 'BUSDBCASHLPTokenSharePool',
    depositTokenName: 'BCASH_BUSD-CAKE-LPv2',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 3,
  },
  DAIBSHARELPTokenSharePool: {
    name: 'Earn BSHARE by BSHARE-BUSD-LP',
    contract: 'DAIBSHARELPTokenSharePool',
    depositTokenName: 'BSHARE_BUSD-CAKE-LPv2',
    earnTokenName: 'BSHARE',
    finished: false,
    sort: 4,
  },
};

export default configurations[process.env.NODE_ENV || "development"];
