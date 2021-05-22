import React from "react";
import { ModalBlock, ModalNone, ModalMain, Button } from "../_style";

function Modal({ handleClose, show, children }) {
  
  return (
    <div className={show == true ? ModalBlock : ModalNone}>
      <section className={ModalMain}>
        {children}
        <button className={Button} onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default Modal;
