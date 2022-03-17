export const SET_RECIPE = '@@recipe/SET_RECIPE'
export const SET_LOADING = '@@recipe/SET_LOADING'

const setRecipe = (recipe) => ({
    type: SET_RECIPE,
    payload: recipe,
})

const setLoading = () => ({ type: SET_LOADING })

export const loadingRecipe = (name) => (dispatch) => {
    dispatch(setLoading())
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => response.json())
        .then((data) => dispatch(setRecipe(data.meals[0])))
        .catch((error) => console.log(error))
}
