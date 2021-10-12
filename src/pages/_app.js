import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Site em Construção</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}