import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  background: #ede7e3ff;
`

export const Main = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #00000010;
  justify-content: center;
  align-items: center;
`

export const LinkPortfolio = styled.span`
  height: 1em;
  margin-left: 0.5rem;
  margin-top: -4px;
  transition: .2s ease;

  &:hover {
    color: #0070f3
  }
`