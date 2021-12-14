import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
}

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
}

const Header = styled.div`
  background-color: #0f1017;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0px;
  padding: 20px;
  justify-content: space-between;
  max-width: 100%;
  z-index: 2;

  @media only screen and ${device.xs} {
    flex-direction: column;
  }
  @media only screen and ${device.sm} {
    display: flex;
    flex-direction: column;
  }
  @media only screen and ${device.lg} {
    display: flex;
    flex-direction: row;
  }
`

const Logo = styled.img`
  height: 70px;
`

const BrandName = styled.h2`
  color: #fff !important;
  margin-left: 20px;
  font-size: 35px;
`

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`
const MenuLink = styled.div`
  margin: 20px;
  color: #fff !important;
  font-weight: bold;
`

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <Header>
      <BrandContainer>
        <Logo alt="coin-logo" src="https://minishibafloki.com/wp-content/uploads/minishibafloki-logo.png" />
        <BrandName>Mini Shiba Floki</BrandName>
      </BrandContainer>
      <LinkContainer>
        <MenuLink>CHART</MenuLink>
        <MenuLink>WHITEPAPER</MenuLink>
        <MenuLink>TELEGRAM</MenuLink>
      </LinkContainer>
    </Header>
  )
}

export default Menu
