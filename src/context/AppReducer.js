import {
  GET_POKEMON_DATA,
  GET_POKEMON_DETAIL,
  SET_LOADING,
} from "./AppTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case GET_POKEMON_DATA:
      return {
        ...state,
        pokemonData: payload,
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
