import React, { useState, useEffect, useContext } from "react";
import { Heading, Loader, PokeList, Body, Button } from "../_style";
import AppContext from "../context/AppContext";
import Loadable from "react-loadable";

const Loading = () => <p>Loading</p>;

const PokemonCard = Loadable({
  loader: () => import("../components/PokemonCard"),
  loading: Loading,
});

function PokemonList() {
  const { pokemonData, getPokemons, loading, setLoading } =
    useContext(AppContext);
  const [limit, setLimit] = useState(24);

  useEffect(() => {
    getPokemons({ variables: { limit: limit, offset: 0 } });
  }, [limit]);

  return (
    <div>
      <h2 className={Heading}>List of Pokemon</h2>

      {loading && <div className={Loader}></div>}

      {pokemonData.length > 0 && (
        <div className={Body}>
          <p>Showing {pokemonData?.length} Pokemons</p>
          <div className={PokeList}>
            {pokemonData?.map((pokemon) => (
              <PokemonCard image={pokemon.image} name={pokemon.name} />
            ))}
          </div>
          <button
            className={Button}
            disabled={loading}
            onClick={() => {
              setLoading(true);
              setLimit(limit + 9);
            }}
          >
            {loading ? "Please wait" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}

export default PokemonList;
