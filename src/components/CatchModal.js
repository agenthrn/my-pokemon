import React, { useContext, useState } from "react";
import { ModalBlock, ModalNone, ModalMain, Button, Input } from "../_style";

function CatchModal({ handleClose, show, status, pokeData }) {
  const [message, setMessage] = useState(null);

  const [nickname, setNickname] = useState(null);

  var myPokemon = JSON.parse(localStorage.getItem("myPokemon"));

  const checkForNickname = () => {
    var f;
    var found = myPokemon?.some(function (item, index) {
      f = index;
      return item.nickname == nickname;
    });

    if (found) {
      setMessage("Sorry, nickname already used. Use another one.");
    } else {
      myPokemon.push({ nickname: nickname, pokeData });
      localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
      handleClose();
    }
  };
  return (
    <div className={show == true ? ModalBlock : ModalNone}>
      <section className={ModalMain}>
        {message && <p>{message}</p>}
        {status == true ? (
          <div>
            <p>Yey! You successfully catch the Pokemon. Give it name :</p>
            <input
              type="text"
              className={Input}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        ) : (
          <p>Sorry, Pokemon reject you</p>
        )}
        {status == true && (
          <button className={Button} onClick={() => checkForNickname()}>
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
