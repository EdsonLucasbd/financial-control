import Head from 'next/head'
import { Container, Footer, LinkPortfolio, Main } from '../styles/pages/profile'
import Navbar from '../src/components/Nav/Navbar'

export default function profile() {
  return (
    <Container>
      <Head>
        <title>Profile | Controle Financeiro</title>
        <meta name="description" content="Controle suas despesas" />
        <link rel="icon" href="/fav-2.ico" />
      </Head>

      <Main>
        <Navbar />
        Profile
      </Main>

      <Footer>
          Powered with ❤️ by{' '}
          <LinkPortfolio>
            <a href="https://bit.ly/3B3IWPn" target="_blank">Edson Lucas</a>
          </LinkPortfolio>
      </Footer>
    </Container>
  )
}
