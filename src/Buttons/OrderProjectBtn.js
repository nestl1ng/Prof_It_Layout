import "./Buttons.scss";
import ModalWindow from "../Body/ModalWindow/ModalWindow";
import { useState } from "react";
const OrderProject = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = ()=>{
    setShowModal(false);
  }
  return (
    <div>
      <button className="OrderProjectBtn" onClick={()=>{setShowModal(true)}}>
        <h9>Заказать проект</h9>
      </button>
      <ModalWindow active={showModal} closeModal={closeModal}/>
    </div>
  );
};
export default OrderProject;
