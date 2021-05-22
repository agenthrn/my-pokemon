import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import AppContext from "../context/AppContext";

import {
  Heading,
  SubHeading,
  Loader,
  Body,
  CatchButton,
  PokeDetailSection,
  Tag,
  TagFlex,
  Sprites,
} from "../_style";

import CatchModal from "../components/CatchModal";

function PokemonDetail() {
  let { name } = useParams();

  const {
    selectedPokemonData,
    getPokemon,
    loading,
    setLoading
  } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    getPokemon({ variables: { name: name } });
  }, []);

  const [catchPoke, setCatchPoke] = useState(false);
  const [catchProcess, setCatchProcess] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const hideModal = () => {
    setOpenModal(false);
  };

  const catchPokemon = () => {
    setCatchProcess(true);
    if (Math.random() >= 0.5) {
      setCatchProcess(false);
      setCatchPoke(true);
      setOpenModal(true);
    } else {
      setCatchProcess(false);
      setCatchPoke(false);
      setOpenModal(true);
    }
  };

  return (
    <div>
      {loading && <div className={Loader}></div>}

      {!loading && selectedPokemonData && (
        <div className={Body}>
          <div className={PokeDetailSection}>
            <img
              src={selectedPokemonData?.sprites?.front_default}
              alt={`image of ${selectedPokemonData?.name}`}
              className={Sprites}
            />
            <div>
              <h1 className={Heading}>{selectedPokemonData?.name}</h1>
              <p className={SubHeading}>Types : </p>
              <div className={TagFlex}>
                {selectedPokemonData?.types?.map((type) => (
                  <span className={Tag}>{type?.type?.name}</span>
                ))}
              </div>
              <p className={SubHeading}>Abilities : </p>
              <div className={TagFlex}>
                {selectedPokemonData?.abilities?.map((ability) => (
                  <span className={Tag}>{ability?.ability?.name}</span>
                ))}
              </div>
              <p className={SubHeading}>Moves : </p>
              <div className={TagFlex}>
                {selectedPokemonData?.moves?.map((move) => (
                  <span className={Tag}>{move?.move?.name}</span>
                ))}
              </div>
            </div>
          </div>
          <button
            className={CatchButton}
            disabled={catchProcess}
            onClick={() => catchPokemon()}
          >
            {catchProcess ? "Please wait" : "Catch!"}
          </button>
        </div>
      )}
      <CatchModal
        show={openModal}
        handleClose={hideModal}
        status={catchPoke}
        pokeData={selectedPokemonData}
      />
    </div>
  );
}

export default PokemonDetail;
