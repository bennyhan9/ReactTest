
import Recipe from '../models/recipe';
const recipeArray = require('../data/dummy_data.json');

export const createRecipeArray = (): Recipe[]  => {
    return recipeArray.map(item => new Recipe(
        item.id, 
        item.title,
        item.imageUri,
        item.duration,
        item.ingredients,
        item.steps
    ));
}