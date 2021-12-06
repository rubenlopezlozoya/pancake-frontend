const getTokenLogoURL = (address: string) => {
  if (address === '0x9a2409aCC332F64Bab73d01d5BBfBC982e5F1256') {
    return 'https://uploads-ssl.webflow.com/61844a7735c43a40f5ec2724/61a0093fbf6516d32927333f_logo%20guano.png'
  }

  return `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
}

export default getTokenLogoURL
