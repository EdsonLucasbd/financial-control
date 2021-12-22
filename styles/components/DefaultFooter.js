import styled from "styled-components"

export const Footer = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  /* width: 100vw; */
  color: var(--text);
  border-top: 1px solid #00000010;
  background: var(--blue);
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