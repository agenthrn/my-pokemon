import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeCard, PokeCardTitle } from "../_style";

function PokemonCard({ image, name }) {
  return (
    <div className={PokeCard}>
      <img src={image} alt={`Image of ${name}`} />
      <Link to={`/pokemon/${name}`} className={PokeCardTitle}>{name}</Link>
    </div>
  );
}

export default PokemonCard;
