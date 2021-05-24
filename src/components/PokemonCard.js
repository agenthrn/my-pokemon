import React from "react";
import { Link } from "react-router-dom";
import { PokeCard, PokeCardTitle, PokemonCardImage } from "../_style";
import { Lazy } from "react-lazy";

function PokemonCard({ image, name }) {
  
  var myPokemon = JSON.parse(localStorage.getItem("myPokemon"));

  const checkForSavedPokemon = (name) => {
    var f;
    var found = myPokemon?.filter((el) => el.pokeData.name === name);

    if (found) {
      return found.length;
    } else {
      return 0;
    }
  };

  return (
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
      <p>Owned : {checkForSavedPokemon(name)}</p>
    </div>
  );
}

export default PokemonCard;
