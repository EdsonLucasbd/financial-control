import { Provider } from "next-auth/client"
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../styles/theme/light'


export default function MyApp({ 
  Component,
  pageProps: { session, ...pageProps }, }) {
  return (
    <Provider session={session}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
