import { Container, Main } from '../styles/pages/profile'
import Navbar from '../src/components/Nav/Navbar'
import DefaultFooter from '../src/components/DefaultFooter';
import DefaultHeader from '../src/components/DefaultHeader';

export default function profile() {
  return (
    <Container>
      <DefaultHeader pageTitle={'Profile'} />

      <Main>
        <Navbar />
        Profile
      </Main>

      <DefaultFooter />
    </Container>
  )
}
