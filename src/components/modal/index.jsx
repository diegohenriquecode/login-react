import { useEffect, useState } from "react";
import reactDom from "react-dom";

import { ModalOverlay, ModalWrapper, Modal } from "./styles";

export const ModalUp = ({ children, show, setShow }) => {
  return (
    <ModalOverlay hidden={show}>
      <ModalWrapper>
        <Modal>{children}</Modal>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};
