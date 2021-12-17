import React from 'react';
import { IconStyleWrapper, OptionButton, Ul } from '../../../styles/components/Nav/RightNav';

import { signOut } from "next-auth/client";

import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Home } from '@styled-icons/boxicons-regular/Home'

const RightNav = ({ open }) => {
  if (window.innerWidth <= 768) {
    return (
      <Ul open={open}>
        <OptionButton>
          <li>Home</li>
          <IconStyleWrapper>
            <Home/>
          </IconStyleWrapper>
        </OptionButton>
        <OptionButton>
          <li>Perfil</li>
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

  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Perfil</li>
      <li>
        <div onClick={() => signOut()}>
          <a>
            Sair
          </a>
        </div>
      </li>
    </Ul>
  )
  
}

export default RightNav