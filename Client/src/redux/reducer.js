import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER:
      if (payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        const filteredCharacters = state.allCharacters.filter(
          (character) => character.gender === payload
        );
        return {
          ...state,
          myFavorites: filteredCharacters,
        };
      }

    case ORDER:
      const orderedCharacters = [...state.allCharacters].sort((a, b) =>
        payload === "A" ? a.id - b.id : b.id - a.id
      );
      return {
        ...state,
        myFavorites: orderedCharacters,
      };

    default:
      return { ...state };
  }
};

export default reducer;
