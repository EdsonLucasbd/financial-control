import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.backgroundHeader};
  width: 100%;
  border-bottom: 1px solid #00000010;
  padding: 0 30px;
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  transition: background 0.3s linear;
`