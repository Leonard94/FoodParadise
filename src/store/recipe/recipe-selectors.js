export const selectRecipeInfo = (state) => ({
    error: state.recipe.error,
    status: state.recipe.status,
})

export const selectRecipe = (state) => state.recipe.recipe
