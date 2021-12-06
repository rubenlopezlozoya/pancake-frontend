import React from 'react'
import styled from 'styled-components'
import useActiveWeb3React from '../../../../hooks/useActiveWeb3React'

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

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${device.xs} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.sm} {
    margin-bottom: 10px;
  }
`
const SectionHeader = styled.h2`
  color: #6b330e;
  font-family: Hantu Kom Kom;
  font-size: 80px;
  text-shadow: 0 0 6px #fff;
  text-align: center;
`

const SectionCTA = styled.h3`
  font-family: 'Varela Round', sans-serif;
  color: #503c23;
  font-size: 30px;
  line-height: 1.34;
  font-weight: 400;
  text-shadow: 0 0 6px #fff;
  mix-blend-mode: normal;
  margin: 40px 0px;

  @media only screen and ${device.xs} {
    text-align: center;
  }
  @media only screen and ${device.sm} {
    text-align: center;
  }
  @media only screen and ${device.lg} {
    text-align: left;
  }
`

const StyledButton = styled.button`
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 0;
  box-shadow: 0px -1px 0px 0px rgb(14 14 44 / 40%) inset;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-letter-spacing: 0.03em;
  -moz-letter-spacing: 0.03em;
  -ms-letter-spacing: 0.03em;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0;
  -webkit-transition: background-color 0.2s, opacity 0.2s;
  transition: background-color 0.2s, opacity 0.2s;
  height: 48px;
  padding: 0 35px;
  background-color: #1fc7d4;
  color: white;

  @media only screen and ${device.xs} {
    border-radius: 16px;
  }
  @media only screen and ${device.sm} {
    border-radius: 16px;
  }
  @media only screen and ${device.lg} {
    border-radius: 0px 16px 16px 0px;
  }
  box-shadow: 0px 0px 15px -5px #fff;
`

const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  align-items: center;

  @media only screen and ${device.xs} {
    background-color: transparent;
    flex-direction: column;
  }
  @media only screen and ${device.sm} {
    background-color: transparent;
    flex-direction: column;
  }
  @media only screen and ${device.lg} {
    flex-direction: row;
  }
`
const AddressText = styled.p`
  padding: 15px 20px;
  border-radius: 16px;
  word-break: break-all;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px -5px #fff;

  @media only screen and ${device.xs} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.sm} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.lg} {
    margin-bottom: 0px;
    border-radius: 16px 0px 0px 16px;
  }
`

const SwapLeftContainer = (props) => {
  const { account } = useActiveWeb3React()
  const [buttonText, setButtonText] = React.useState('Copy referral link!')

  const handleCopyButtonClick = () => {
    setButtonText('Link Copied! ✔️')
    navigator.clipboard.writeText(
      `localhost:3000/?outputCurrency=0x9a2409aCC332F64Bab73d01d5BBfBC982e5F1256&ref=${account}`,
    )
  }

  return (
    <ParentContainer>
      <SectionHeader>GUANO SWAP</SectionHeader>
      <SectionCTA>
        <b>Earn rewards</b> with every <b>$GUANO</b> purchase made in <b>Guano Swap</b> with your referral link!
      </SectionCTA>
      <AddressBox>
        <AddressText>{account || 'Connect your wallet to get a link'}</AddressText>
        <StyledButton type="button" onClick={handleCopyButtonClick}>
          {buttonText}
        </StyledButton>
      </AddressBox>
    </ParentContainer>
  )
}

export default SwapLeftContainer
