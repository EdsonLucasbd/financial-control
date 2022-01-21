import React from 'react';
import { useSession } from "next-auth/client";
import Redirect from "../src/components/Redirect";
import { Container, Main } from "../styles/pages/home";
import DefaultFooter from "../src/components/DefaultFooter";
import DefaultHeader from "../src/components/DefaultHeader";
import Navbar from "../src/components/Nav/Navbar";
import Modal from "../src/components/Modal";

import usePersistedState from "../src/utils/usePersistedState";

import GlobalStyles from '../styles/globals'

import { ThemeProvider } from "styled-components";
import light from '../styles/theme/light'
import dark from '../styles/theme/dark'

export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [session] = useSession();
  
  if (theme === undefined) {
    setTheme(light)
  }

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  if (!session) {
    return <Redirect to="/login" />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <DefaultHeader pageTitle={"Home"} />

          <Main>
            <Navbar toggleTheme={toggleTheme}/>
            Home
            {/* <Modal /> */}
          </Main>

          <DefaultFooter />
        </Container>
      </ThemeProvider>
    );
  }
}
