import React from "react";

import {
  Container,
  ModalTitle,
  ModalBody,
  ModalFooter,
  SaveButton,
} from "../../styles/components/Modal";

function Modal() {
  return (
    <Container>
      <ModalTitle>Novo Lançamento</ModalTitle>
      <ModalBody>
        <input placeholder="Descrição" />
        <input placeholder="Valor" />
      </ModalBody>

      <ModalFooter>
        <SaveButton>Salvar</SaveButton>
      </ModalFooter>
    </Container>
  );
}

export default Modal;
