import styled from "styled-components";
import { CloseCircle } from '@styled-icons/ionicons-sharp/CloseCircle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 578px;
  height: 469px;
  background: var(--background);
  /* border: 1px solid ${(props) => props.theme.colors.boxShadow}; */
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.boxShadow};
`;

export const ModalHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const CloseButton = styled(CloseCircle)`
  color: var(--coral);
  width: 35px;
  cursor: pointer;
  position: relative;
  right: -160px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  width: 532px;
  height: 302px;
  border-radius: 4px;
  margin: 6px 0 22px 0;
  padding: 20px;
`;

export const SelectInput = styled.select`
  font-family: Nunito Sans;
  margin-top: 13px;
  font-size: 16px;
  width: 120px;
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background: transparent;
`;

export const InputGroup = styled.div`
  position: relative;
  padding-top: 13px;
  margin-top: 18px;
`;

export const CustomInputAnimated = styled.input`
  border: 0;
  border-bottom: 2px solid lightgrey;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    border-bottom: 2px solid var(--blue);
  }

  &:focus + label, :not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 0;
    color: var(--blue);
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  &[type="number"] {
      -moz-appearance: textfield;
  }

`;

export const CustomLabelAnimated = styled.label`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 13px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
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
