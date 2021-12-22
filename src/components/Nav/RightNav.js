import React, { useEffect, useState } from 'react';
import { IconStyleWrapper, OptionButton, Ul, Li } from '../../../styles/components/Nav/RightNav';

import { signOut } from "next-auth/client";

import { ThemeSwitcher } from '../ThemeSwitcher';

import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Home } from '@styled-icons/boxicons-regular/Home'

import { useRouter } from 'next/router';
import Link from 'next/link';

const RightNav = ({ open, toggleTheme }) => {
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      return (
        <Ul open={open}>
          <OptionButton>
            <li>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <IconStyleWrapper>
              <Home/>
            </IconStyleWrapper>
          </OptionButton>
          <OptionButton>
            <li>
              <Link href="/profile">
                <a>
                  Perfil
                </a>
              </Link>
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
    <>
      <Ul open={open}>
        <Li className={
          router.pathname === '/' && 'isSelected'
        }>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </Li>
        <Li className={
          router.pathname === '/profile' && 'isSelected'
        }>
          <Link href="/profile">
            <a>
              Perfil
            </a>
          </Link>
        </Li>
        <Li>
          <div onClick={() => signOut()}>
            <a>
              Sair
            </a>
          </div>
        </Li>
      </Ul>
      <ThemeSwitcher handleToggleTheme={toggleTheme}/>
    </>
  )
  
}

export default RightNav