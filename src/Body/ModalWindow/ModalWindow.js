import React from "react";
import "./ModalWindow.scss";
import { ReactComponent as CloseBtn } from "./../../Buttons/CloseBtn.svg";
import Form from "./Form/Form";
const ModalWindow = ({ active, closeModal }) => {
  if (!active) {
    return null;
  }
  return (
    <div className="ModalWindow" onClick={closeModal}>
      <div
        className="ModalContent"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ModalHeader">
          <h3 className="ModalHeaderText">Связаться с нами</h3>
          <CloseBtn className="CloseBtn" onClick={closeModal} />
        </div>
        <div className="ModalLine"></div>
        <div className="ModalBody">
          <Form />
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;
