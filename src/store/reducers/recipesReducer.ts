// Actions
export const SHOW_RECIPES = 'SHOW_RECIPES';

// Initial state
const initialState = {
    recipes: []
  };

// Reducer
export default function RecipesReducer(state = initialState, action = {}) {
    switch (action.type) {
      case SHOW_RECIPES:
        return Object.assign({}, state, {
          recipes: action.payload,
        });
      default:
        return state;
    }
}