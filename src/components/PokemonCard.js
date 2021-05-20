import React, { useContext } from "react";
import { PokeCard, PokeCardTitle } from "../_style";

function PokemonCard({ image, name }) {
  return (
    <div className={PokeCard}>
      <img src={image} alt={`Image of ${name}`} />
      <p className={PokeCardTitle}>{name}</p>
    </div>
  );
}

export default PokemonCard;
