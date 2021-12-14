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
  margin-top: 10px;

  @media only screen and ${device.xs} {
    margin-bottom: 40px;
  }
  @media only screen and ${device.sm} {
    margin-bottom: 40px;
  }
`

const RewardBar = styled.div`
  background-color: #212332;
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 0px 15px -5px #fff;

  @media only screen and ${device.xs} {
    flex-direction: column;
    margin-top: 20px;
  }
  @media only screen and ${device.sm} {
    flex-direction: column;
    margin-top: 20px;
  }
  @media only screen and ${device.lg} {
    flex-direction: row;
    margin-top: 0px;
  }
`

const FirstRewardCell = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${device.xs} {
    border-bottom: 1px solid #e2e2e2;
    padding: 20px 20px;
    margin: 0px 20px;
  }
  @media only screen and ${device.sm} {
    border-bottom: 1px solid #e2e2e2;
    padding: 20px 20px;
    margin: 0px 20px;
  }
  @media only screen and ${device.lg} {
    border-bottom: 0px;
    margin: 20px 0px;
    padding: 0px 40px;
  }
`

const RewardCell = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${device.xs} {
    border-bottom: 1px solid #e2e2e2;
    padding: 20px 20px;
    margin: 0px 20px;
  }
  @media only screen and ${device.sm} {
    border-bottom: 1px solid #e2e2e2;
    padding: 20px 20px;
    margin: 0px 20px;
  }
  @media only screen and ${device.lg} {
    border-left: 1px solid #e2e2e2;
    border-bottom: 0px;
    margin: 20px 0px;
    padding: 0px 40px;
  }
`

const RewardCellHeader = styled.span`
  margin-bottom: 20px;
  font-weight: bold;
  color: #fff !important;
`

const RewardCellContents = styled.span`
  font-size: 30px;
  color: #fff !important;

  @media only screen and ${device.xs} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.sm} {
    margin-bottom: 10px;
  }
  @media only screen and ${device.lg} {
    margin-bottom: 0px;
  }
`

const ConnectWalletButton = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`

const RewardsBar = () => {
  const { account } = useActiveWeb3React()

  return (
    <ParentContainer>
      {account ? (
        <RewardBar>
          <FirstRewardCell>
            <RewardCellHeader>Total referred purchases</RewardCellHeader>
            <RewardCellContents>17</RewardCellContents>
          </FirstRewardCell>
          <RewardCell>
            <RewardCellHeader>Total claimed rewards</RewardCellHeader>
            <RewardCellContents>1,200,000 $MSF</RewardCellContents>
          </RewardCell>
          <RewardCell>
            <RewardCellHeader>Total unclaimed rewards</RewardCellHeader>
            <RewardCellContents>500,000 $MSF</RewardCellContents>
          </RewardCell>
          <RewardCell>
            <RewardCellHeader>Total rewards</RewardCellHeader>
            <RewardCellContents>1,700,000 $MSF</RewardCellContents>
          </RewardCell>
          <RewardCell>
            <RewardCellHeader>Next Reward Distribution</RewardCellHeader>
            <RewardCellContents>14hr 30min</RewardCellContents>
          </RewardCell>
        </RewardBar>
      ) : (
        <ConnectWalletButton>
          <p>Connect your wallet to see your rewards</p>
        </ConnectWalletButton>
      )}
    </ParentContainer>
  )
}

export default RewardsBar
