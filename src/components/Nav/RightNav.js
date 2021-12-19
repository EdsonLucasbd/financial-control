import React, { useEffect } from 'react';
import { IconStyleWrapper, OptionButton, Ul, Li } from '../../../styles/components/Nav/RightNav';

import { signOut } from "next-auth/client";

import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Home } from '@styled-icons/boxicons-regular/Home'

const RightNav = ({ open }) => {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      return (
        <Ul open={open}>
          <OptionButton>
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <IconStyleWrapper>
              <Home/>
            </IconStyleWrapper>
          </OptionButton>
          <OptionButton>
            <li>
              <a href="/profile">
                Perfil
              </a>
            </li>
            <IconStyleWrapper>
              <PersonCircle/>
            </IconStyleWrapper>
          </OptionButton>
          <OptionButton>
            <li>
              <div onClick={() => signOut()}>
                <a>
                  Sair
                </a>
              </div>
            </li>
            <IconStyleWrapper>
              <LogOut/>
            </IconStyleWrapper>
          </OptionButton>
        </Ul>
      )
    }
  }, []);

  return (
    <Ul open={open}>
      <Li>
        <a href="/">
          Home
        </a>
      </Li>
      <Li>
        <a href="/profile">
          Perfil
        </a>
      </Li>
      <Li>
        <div onClick={() => signOut()}>
          <a>
            Sair
          </a>
        </div>
      </Li>
    </Ul>
  )
  
}

export default RightNav