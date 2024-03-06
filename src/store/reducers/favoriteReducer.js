// Actions
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Initial state
const initialState = {
    favoriteMealIds: []
  };

// Reducer
export default function FavoritesReducer(state = initialState, action = {}) {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        return Object.assign({}, state, {
            favoriteMealIds: [...state.favoriteMealIds, action.id],
        });
      case REMOVE_FROM_FAVORITES:
        return Object.assign({}, state, {
          favoriteMealIds: state.favoriteMealIds.filter(mealId => mealId !== action.id)
        });
      default:
        return state;
    }
}