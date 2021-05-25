import {
  GET_POKEMON_DATA,
  GET_MY_POKEMON_DATA,
  GET_POKEMON_DETAIL,
  SET_LOADING,
  SET_MESSAGE,
} from "./AppTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case GET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: payload,
        loading: false,
      };
    case GET_MY_POKEMON_DATA:
      return {
        ...state,
        myPokemonData: payload,
        loading: false,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        selectedPokemonData: payload,
        loading: false,
      };
    default:
      return state;
  }
};
