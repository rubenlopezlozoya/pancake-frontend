import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    
    img {
      height: auto;
      max-width: 100%;
    }

    button {
      background-color: #212332 !important;
      color: white !important;
    }

    h2 {
      color: #212332 !important;
    }

    svg {
        fill: white !important;
      }

    div {
      color #212332 !important;
    }

    #pair {
      color: white !important;
    }

    #open-settings-dialog-button {
      svg {
        fill: white !important;
      }
    }

    #wallet-connect-metamask {
      background-color: white !important
    }

    #wallet-connect-walletconnect {
      background-color: white !important
    }

    button[id='wallet-connect-trust wallet'] {
      background-color: white !important
    }

    button[id='wallet-connect-binance chain'] {
      background-color: white !important
    }

    #wallet-connect-mathwallet {
      background-color: white !important
    }

    #wallet-connect-tokenpocket {
      background-color: white !important
    }

    #wallet-connect-safepal {
      background-color: white !important
    }

    #wallet-connect-coin98 {
      background-color: white !important
    }
  }
`

export default GlobalStyle
