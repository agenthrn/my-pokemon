import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokeCard, PokeCardTitle, DeleteButton } from "../_style";
import Modal from "../components/Modal";
import AppContext from "../context/AppContext";

function MyPokemonCard({ image, name, nickname }) {
  const { myPokemonData, getMyPokemons } = useContext(AppContext);
  
  const [openModal, setOpenModal] = useState(false);

  const hideModal = () => {
    setOpenModal(false);
  };

  const releasePokemon = (nickname) => {
    var f;
    var found = myPokemonData?.find(function (item, index) {
      f = index;
      return item.nickname == nickname;
    });

    if (found) {
      var newMyPokemon = myPokemonData;
      newMyPokemon.splice(f, f + 1);
      localStorage.setItem("myPokemon", JSON.stringify(newMyPokemon));
      getMyPokemons();
      hideModal();
    }
  };

  return (
    <>
      <div className={PokeCard}>
        <img src={image} alt={`Image of ${name}`} />
        <Link to={`/pokemon/${name}`} className={PokeCardTitle}>
          {name}
        </Link>
        <p>{nickname}</p>
        <button className={DeleteButton} onClick={() => setOpenModal(true)}>
          Release
        </button>
      </div>
      <Modal show={openModal} handleClose={hideModal}>
        <div>
          <p>Are you really want to release this Pokemon ?</p>
          <button
            className={DeleteButton}
            onClick={() => releasePokemon(nickname)}
          >
            Release
          </button>
        </div>
      </Modal>
    </>
  );
}

export default MyPokemonCard;
