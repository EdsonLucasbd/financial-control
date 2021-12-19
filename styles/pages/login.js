import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgb(237,231,227);
  background: linear-gradient(
    324deg, 
    rgba(237,231,227,1) 0%, 
    rgba(130,192,204,1) 55%, 
    rgba(72,159,181,1) 80%, 
    rgba(22,105,122,1) 100%
  );
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  width: 300px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 6px;
`;

export const LogoContainer = styled.div`
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;
export const LoginButton = styled.button`
  height: 40px;
  width: 90px;
  background: #16697aff;
  color: #ede7e3ff;
  border: none;
  border-radius: 2px;
  /* padding: 12px 40px 10px; */
  position: relative;
  cursor: pointer;
  outline: none;

  &:before,
  &:after {
    border: 0 solid transparent;
    transition: all 0.3s;
    content: '';
    height: 0;
    position: absolute;
    width: 15px;
  }

  :before {
    border-top: 2px solid #16697aff;
    right: 0;
    top: -4px;
  }

  :after {
    border-bottom: 2px solid #16697aff;
    bottom: -4px;
    left: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
  }
`;