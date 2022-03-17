import { combineReducers } from 'redux'
import { categoriesReducer } from './categories/categories-reducer'
import { recipesReducer } from './recipes/recipes-reducer'
import { recipeReducer } from './recipe/recipe-reducer'

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
})
