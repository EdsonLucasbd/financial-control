import Head from 'next/head'
import { useSession } from "next-auth/client"
import Redirect from '../src/components/Redirect';
import { Footer, LinkPortfolio, Main, Container } from '../styles/pages/home';
import Navbar from '../src/components/Nav/Navbar';

export default function Home() {
  const [ session ] = useSession();
  
  if (!session) {
    return <Redirect to="/login" />
  } else {
    return (
      <Container>
        <Head>
          <title>Home | Controle Financeiro</title>
          <meta name="description" content="Controle suas despesas" />
          <link rel="icon" href="/fav-2.ico" />
        </Head>
  
        <Main>
          <Navbar />
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
}
