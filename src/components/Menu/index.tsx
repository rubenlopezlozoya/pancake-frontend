import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { usePhishingBannerManager } from 'state/user/hooks'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

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
  background-color: white;
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0px;
  padding: 20px;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  max-width: 100%;

  @media only screen and ${device.xs} {
    justify-content: center;
  }
  @media only screen and ${device.sm} {
    display: flex;
  }
  @media only screen and ${device.lg} {
    display: flex;
  }
`

const Logo = styled.img`
  height: 70px;
`

const BrandName = styled.h2`
  color: #6b330e;
  margin-left: 20px;
  font-family: Hantu Kom Kom;
  font-size: 35px;
`

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <Header>
      <BrandContainer>
        <Logo
          alt="guano-logo"
          src="https://uploads-ssl.webflow.com/61844a7735c43a40f5ec2724/61a0093fbf6516d32927333f_logo%20guano.png"
        />
        <BrandName>GUANO</BrandName>
      </BrandContainer>
    </Header>
  )
}

export default Menu
