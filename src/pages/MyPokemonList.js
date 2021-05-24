import React, { useEffect, useContext } from "react";
import { Heading, Loader, PokeList, Body } from "../_style";
import AppContext from "../context/AppContext";
import Loadable from "react-loadable";

const Loading = () => <p>Loading</p>;

const MyPokemonCard = Loadable({
  loader: () => import("../components/MyPokemonCard"),
  loading: Loading,
});

function MyPokemonList() {
  const { myPokemonData, getMyPokemons, loading, setLoading } =
    useContext(AppContext);

  useEffect(() => {
    getMyPokemons();
  }, []);

  return (
    <div>
      <h2 className={Heading}>List of Owned Pokemon</h2>

      {loading && <div className={Loader}></div>}

      {myPokemonData?.length > 0 ? (
        <div className={Body}>
          <p>Showing {myPokemonData?.length} Pokemons</p>
          <div className={PokeList}>
            {myPokemonData?.map((pokemon) => (
              <MyPokemonCard
                image={pokemon.pokeData.sprites.front_default}
                name={pokemon.pokeData.name}
                nickname={pokemon.nickname}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No Pokemon Owned</p>
      )}
    </div>
  );
}

export default MyPokemonList;
