import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  PokeCard,
  PokeCardTitle,
  SmallDeleteButton,
  DeleteButton,
  PokemonCardImage,
} from "../_style";
import Modal from "../components/Modal";
import AppContext from "../context/AppContext";
import { Lazy } from "react-lazy";

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
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        const notification = new Notification("Congrats!", {
          body: "You have successfully release pokemon from your pocket",
          icon: "/pokeball.png",
        });
        notification.onclick = function () {
          window.open("/my-pokemon");
        };
        if ("setAppBadge" in navigator && "clearAppBadge" in navigator) {
          navigator.setAppBadge(1);
        }
      }
      hideModal();
    }
  };

  return (
    <>
      <div className={PokeCard}>
        <Lazy ltIE9>
          <img
            className={PokemonCardImage}
            src={image}
            alt={`Image of ${name}`}
          />
        </Lazy>
        <Link to={`/pokemon/${name}`} className={PokeCardTitle}>
          {name}
        </Link>
        <p>{nickname}</p>
        <button
          className={SmallDeleteButton}
          onClick={() => setOpenModal(true)}
        >
          Release
        </button>
      </div>
      <Modal show={openModal} handleClose={hideModal}>
        <div>
          <p>
            Are you really want to release this Pokemon ? This process cant be
            undone
          </p>
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
