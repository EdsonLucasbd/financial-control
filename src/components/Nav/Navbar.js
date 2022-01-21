import React from 'react';
import { Nav } from '../../../styles/components/Nav/Navbar';
import Burger from './Burger';

const Navbar = ({ toggleTheme }) => {
  return (
    <Nav>
      {/* <div className="logo">
        Nav Bar
      </div> */}
      <Burger toogleThemeFunction={toggleTheme} />
    </Nav>
  )
}

export default Navbar