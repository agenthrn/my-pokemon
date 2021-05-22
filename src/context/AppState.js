import React, { useReducer } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS, GET_POKEMON } from "../_graphqlQuery";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import {
  GET_POKEMON_DATA,
  SET_LOADING,
  GET_POKEMON_DETAIL,
} from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    pokemonData: [],
    loading: true,
    selectedPokemonData: {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setLoading = (payload) => {
    dispatch({ type: SET_LOADING, payload });
  };

  const [
    getPokemons,
    { loading: loadingPoke, error: errorPoke, data: dataPoke },
  ] = useLazyQuery(GET_POKEMONS, {
    fetchPolicy: "cache-and-network",
    variables: { limit: initialState.limit, offset: initialState.offset },
    onCompleted(dataPoke) {
      setLoading(false);
      dispatch({
        type: GET_POKEMON_DATA,
        payload: dataPoke?.pokemons?.results,
      });
    },
  });

  const [
    getPokemon,
    {
      loading: loadingPokeDetail,
      error: errorPokeDetail,
      data: dataPokeDetail,
    },
  ] = useLazyQuery(GET_POKEMON, {
    fetchPolicy: "cache-and-network",
    onCompleted(dataPokeDetail) {
      dispatch({
        type: GET_POKEMON_DETAIL,
        payload: dataPokeDetail?.pokemon,
      });
    },
  });

  const { pokemonData, loading, selectedPokemonData } = state;

  return (
    <AppContext.Provider
      value={{
        getPokemons,
        getPokemon,
        pokemonData,
        loading,
        selectedPokemonData,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
