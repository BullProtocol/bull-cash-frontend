import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href= {buyBSHARE} target="_blank">Get BSHARE</StyledLink>
      <StyledLink href= {buyBCASH} target="_blank">Get BCASH</StyledLink>
      <StyledLink href="https://github.com/BcashProtocol" target="_blank">GitHub</StyledLink>
      <StyledLink href="https://twitter.com/BasisCash" target="_blank">Twitter</StyledLink>
      <StyledLink href="https://t.me/bcashprotocol" target="_blank">Telegram</StyledLink>
      <StyledLink href="https://medium.com/basiscash" target="_blank">Medium</StyledLink>
      <StyledLink href="https://www.dropbox.com/s/ed5vxvaple5e740/REP-BcashProtocol-06_11_2020.pdf?dl=0" target="_blank">Audit</StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${props => props.theme.color.grey[400]};
  padding-left: ${props => props.theme.spacing[3]}px;
  padding-right: ${props => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.color.grey[500]};
  }
`
const buyBSHARE ="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0xa7ed29b253d8b4e3109ce07c80fc570f81b63696";
const buyBCASH= "https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a&outputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
export default Nav