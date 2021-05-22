import React, { useContext } from "react";
import { ModalBlock, ModalNone, ModalMain, Button, Input } from "../_style";

function CatchModal({ handleClose, show, status, pokeData, handleSave }) {
  return (
    <div className={show == true ? ModalBlock : ModalNone}>
      <section className={ModalMain}>
        {status == true ? (
          <div>
            <p>Yey! You successfully catch the Pokemon. Give it name :</p>
            <input type="text" className={Input} />
          </div>
        ) : (
          <p>Sorry, Pokemon reject you</p>
        )}
        {status == true && (
          <button className={Button} onClick={handleSave}>
            Save Pokemon
          </button>
        )}
        <button className={Button} onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default CatchModal;
