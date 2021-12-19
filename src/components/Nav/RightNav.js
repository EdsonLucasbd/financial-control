import React, { useEffect, useState } from 'react';
import { IconStyleWrapper, OptionButton, Ul, Li } from '../../../styles/components/Nav/RightNav';

import { signOut } from "next-auth/client";

import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Home } from '@styled-icons/boxicons-regular/Home'
import { useRouter } from 'next/router';

const RightNav = ({ open }) => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);

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
      <Li className={
        router.pathname === '/' && 'isSelected'
      }>
        <a href="/">
          Home
        </a>
      </Li>
      <Li className={
        router.pathname === '/profile' && 'isSelected'
      }>
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