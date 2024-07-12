import { SHOW_RECIPES } from "../reducers/recipesReducer";
import { createRecipeArray } from "../../utils/recipeUtils"

export const showRecipes = () => {
  const recipes = createRecipeArray();
  return {
    type: SHOW_RECIPES,
    payload: recipes,
  };
}
