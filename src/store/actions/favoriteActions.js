import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../reducers/favoriteReducer";


export const addToFavorites = id => {
  return {
    type: ADD_TO_FAVORITES,
    id,
  };
}

export const removeFromFavorites = id => {
  return {
    type: REMOVE_FROM_FAVORITES,
    id,
  };
}