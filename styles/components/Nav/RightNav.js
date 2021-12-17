import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon'
import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle'
import { Home } from '@styled-icons/boxicons-regular/Home'

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #489fb5ff;
    -webkit-box-shadow: 1px 0px 15px -4px #000000; 
    box-shadow: 1px 0px 15px -4px #000000;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
    li {
      color: #ede7e3ff;
    }
  }
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #ede7e3ff;
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const OptionButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`