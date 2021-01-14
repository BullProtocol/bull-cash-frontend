import React from 'react';

import bacLogo from '../../assets/img/bcash-logo.svg';
import basLogo from '../../assets/img/bshare-logo.svg';
import babLogo from '../../assets/img/bbond-logo.svg';
import yCRVLogo from '../../assets/img/ycrv.png';
import DAILogo from '../../assets/img/DAI.png';
import sUSDLogo from '../../assets/img/sUSD.png';
import USDCLogo from '../../assets/img/USDC.png';
import USDTLogo from '../../assets/img/USDT.png';
import WBNBLogo from '../../assets/img/WBNB.png';
import BUSDLogo from '../../assets/img/BUSD.png';

const logosBySymbol: {[title: string]: string} = {
  'BCASH': bacLogo,
  'BBond': babLogo,
  'BSHARE': basLogo,
  'yCRV': yCRVLogo,
  'DAI': DAILogo,
  'SUSD': sUSDLogo,
  'USDC': USDCLogo,
  'USDT': USDTLogo,
  'WBNB':WBNBLogo,
  'BUSD':BUSDLogo,
  'BCASH_BUSD-CAKE-LPv2': bacLogo,
  'BSHARE_BUSD-CAKE-LPv2': basLogo,
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid BasisLogo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
