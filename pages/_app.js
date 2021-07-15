import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { JurkutStyles } from '../src/lib/jurkutCommons'

const GlobalStyle = createGlobalStyle`
  //Reset CSS
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #FADCD9;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img { //arumar tamanho da imagem pra não ficar gigantona
    max-width: 100%;
    height: auto;
    display:block;
  }

  ${JurkutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
