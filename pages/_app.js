import { Provider } from "next-auth/client"
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import light from '../styles/theme/light'

export default function MyApp({ 
  Component,
  pageProps: { session, ...pageProps }, }) {
  return (
    <Provider session={session}>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
