import PropTypes from 'prop-types';
import { Component } from "react";
import { ModalOverlay, ModalField } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    };
  };
  
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <ModalOverlay onClose={this.handleBackdropClick}>
        <ModalField>
          {children}
        </ModalField>
      </ModalOverlay>, modalRoot
    );
  };
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default Modal;