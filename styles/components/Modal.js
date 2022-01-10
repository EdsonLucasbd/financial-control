import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 578px;
  height: 469px;
  background: var(--background);
  border-radius: 4px;
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  width: 532px;
  height: 302px;
  border-radius: 4px;
  margin: 6px 0 22px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveButton = styled.button`
  width: 368px;
  height: 47px;
  border-radius: 4px;
  background-color: var(--green);
  color: var(--text);
  box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.boxShadow};
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;
