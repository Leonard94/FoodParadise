export const selectRecipesInfo = (state) => {
    return {
        error: state.recipes.error,
        status: state.recipes.status,
    }
}
export const selectAllRecipes = (state) => state.recipes.list
export const selectFavorites = (state) => state.recipes.favorites
export const selectSearchRecipes = (state) => state.recipes.search
