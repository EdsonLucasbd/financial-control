import React from 'react';
import { Container, Main } from '../styles/pages/profile'
import Navbar from '../src/components/Nav/Navbar'
import DefaultFooter from '../src/components/DefaultFooter';
import DefaultHeader from '../src/components/DefaultHeader';

import usePersistedState from "../src/utils/usePersistedState";

import GlobalStyles from '../styles/globals'

import { ThemeProvider } from "styled-components";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

export default function profile() {
  const [theme, setTheme] = usePersistedState('theme', light);

  if (theme === undefined) {
    setTheme(light)
  }
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <DefaultHeader pageTitle={'Profile'} />

        <Main>
          <Navbar toggleTheme={toggleTheme}/>
          Profile
        </Main>

        <DefaultFooter />
      </Container>
    </ThemeProvider>
  )
}
