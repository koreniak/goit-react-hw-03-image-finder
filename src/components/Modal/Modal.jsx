import { Component } from "react";
import { ModalOverlay, ModalField } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      console.log(e.code)
      if (e.code === "Escape") {
        this.props.onClose();
      }
    });
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <ModalOverlay>
        <ModalField>
          {children}
        </ModalField>
      </ModalOverlay>, modalRoot
    );
  };
};

export default Modal;