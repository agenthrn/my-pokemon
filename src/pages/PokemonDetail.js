import React, { useState } from "react";
import { useParams } from "react-router";

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
import { GET_POKEMON } from "../_graphqlQuery";

import { useQuery } from "@apollo/client";
import CatchModal from "../components/CatchModal";

function PokemonDetail() {
  let { name } = useParams();

  const [catchPoke, setCatchPoke] = useState(false);
  const [catchProcess, setCatchProcess] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    fetchPolicy: "cache-and-network",
    variables: { name: name },
  });

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

      {data?.pokemon && (
        <div className={Body}>
          <div className={PokeDetailSection}>
            <img
              src={data?.pokemon?.sprites?.front_default}
              alt={`image of ${data?.pokemon?.name}`}
              className={Sprites}
            />
            <div>
              <h1 className={Heading}>{data?.pokemon?.name}</h1>
              <p className={SubHeading}>Types : </p>
              <div className={TagFlex}>
                {data?.pokemon?.types?.map((type) => (
                  <span className={Tag}>{type?.type?.name}</span>
                ))}
              </div>
              <p className={SubHeading}>Abilities : </p>
              <div className={TagFlex}>
                {data?.pokemon?.abilities?.map((ability) => (
                  <span className={Tag}>{ability?.ability?.name}</span>
                ))}
              </div>
              <p className={SubHeading}>Moves : </p>
              <div className={TagFlex}>
                {data?.pokemon?.moves?.map((move) => (
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
        pokeData={data?.pokemon}
      />
    </div>
  );
}

export default PokemonDetail;
