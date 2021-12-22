import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Switcher } from "../../styles/components/ThemeSwitcher";

export function ThemeSwitcher({ handleToggleTheme }) {
  const { title } = useContext(ThemeContext)

  return (
    <Switcher>
      <Switch
        onChange={handleToggleTheme}
        checked={title === 'dark'}
        height={20}
        width={40}
        handleDiameter={16}
        onColor="#1b1b1b"
        offColor="#1b1b1b"
        activeBoxShadow="0 0 2px 3px var(--background)"
        uncheckedIcon={
          <>
            <img src="/sun.png" alt="sun icon"/>
          </>
        }
        checkedIcon={
          <>
            <img src="/moon.png" alt="moon icon"/>
          </>
        }
        uncheckedHandleIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="white">
            <circle r={5} cx={5} cy={5} />
          </svg>
        }
        checkedHandleIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="white">
            <circle r={5} cx={5} cy={5} />
          </svg>
        }
      />
    </Switcher>
  );
};