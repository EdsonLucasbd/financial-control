import { useSession } from "next-auth/client";

import Redirect from "../src/components/Redirect";
import { Container, Main } from "../styles/pages/home";
import DefaultFooter from "../src/components/DefaultFooter";
import DefaultHeader from "../src/components/DefaultHeader";
import Navbar from "../src/components/Nav/Navbar";
import Modal from "../src/components/Modal";

import light from "../styles/theme/light";
import dark from "../styles/theme/dark";
import usePersistedState from "../src/utils/usePersistedState";

export default function Home() {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [session] = useSession();

  const toggleTheme = () => {
    console.log("initial theme", theme);
    setTheme(theme.title === "light" ? dark : light);
  };

  if (!session) {
    return <Redirect to="/login" />;
  } else {
    return (
      <Container>
        <DefaultHeader pageTitle={"Home"} />

        <Main>
          <Navbar toggleTheme={toggleTheme} />
          Home
          <Modal />
        </Main>

        <DefaultFooter />
      </Container>
    );
  }
}
