import React from "react";

import {
  Container,
  ModalHead,
  ModalTitle,
  CloseButton,
  ModalBody,
  SelectInput,
  InputGroup,
  CustomInputAnimated,
  CustomLabelAnimated,
  ModalFooter,
  SaveButton,
} from "../../styles/components/Modal";

function Modal() {
  return (
    <Container>
      <ModalHead>
        <ModalTitle>Novo Lançamento</ModalTitle>
        <CloseButton />
      </ModalHead>
      <ModalBody>
        <SelectInput>
          <option value="renda">Renda</option>
          <option value="moradia">Moradia</option>
          <option value="alimentacao">Alimentação</option>
          <option value="investimento">Investimento</option>
          <option value="cartao">Cartão</option>
        </SelectInput>
        <InputGroup>
          <CustomInputAnimated placeholder=" " type="text"/>
          <CustomLabelAnimated>Descrição</CustomLabelAnimated>
        </InputGroup>

        <InputGroup>
          <CustomInputAnimated placeholder=" " type="number"/>
          <CustomLabelAnimated>Valor</CustomLabelAnimated>
        </InputGroup>
      </ModalBody>

      <ModalFooter>
        <SaveButton>Salvar</SaveButton>
      </ModalFooter>
    </Container>
  );
}

export default Modal;
