import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon'

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: var(--text);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${( props ) => props.theme.colors.backgroundHeader};
    -webkit-box-shadow: 1px 0px 15px -4px #000000; 
    box-shadow: 1px 0px 15px -4px #000000;
    position: absolute;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Li = styled.li.attrs(props => { className: props.className })`
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &.isSelected{
    border-bottom: 2px solid var(--text);
    pointer-events: none;
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