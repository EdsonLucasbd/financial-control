import React from 'react';
import { Nav } from '../../../styles/components/Nav/Navbar';
import Burger from './Burger';

const Navbar = () => {
  return (
    <Nav>
      {/* <div className="logo">
        Nav Bar
      </div> */}
      <Burger />
    </Nav>
  )
}

export default Navbar