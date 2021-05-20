import React, { useState, useEffect } from "react";
import { Heading, Loader, PokeList, Body, Button } from "../_style";
import { GET_POKEMONS } from "../_graphqlQuery";

import { useLazyQuery } from "@apollo/client";
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
  const [limit, setLimit] = useState(24);
  const [pokemonsData, setPokemonsData] = useState([]);

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: 0 },
    onCompleted(data) {
      setPokemonsData(data?.pokemons?.results);
    },
  });

  useEffect(() => {
    getPokemons();
  }, [limit]);

  return (
    <div>
      <h2 className={Heading}>List of Pokemon</h2>

      {loading && <div className={Loader}></div>}

      {pokemonsData.length>0 && (
        <div className={Body}>
          <p>Showing {pokemonsData?.length} Pokemons</p>
          <div className={PokeList}>
            {pokemonsData?.map((pokemon) => (
              <PokemonCard image={pokemon.image} name={pokemon.name} />
            ))}
          </div>
          <button className={Button} disabled={loading} onClick={() => setLimit(limit + 9)}>
            {loading ? "Please wait" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}

export default PokemonList;
