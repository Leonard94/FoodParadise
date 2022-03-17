export const SET_RECIPES = '@@recipes/SET_RECIPES'
export const SET_LOADING = '@@recipes/SET_LOADING'
export const ADD_TO_FAVORITES = '@@recipes/ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = '@@recipes/REMOVE_FROM_FAVORITES'
export const SET_SEARCH_RECIPES = '@@recipes/SET_SEARCH_RECIPES'
export const CLEAR_SEARCH = '@@recipes/CLEAR_SEARCH'

const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    payload: recipes,
})

const setSearchRecipes = (searchRecipes) => ({
    type: SET_SEARCH_RECIPES,
    payload: searchRecipes,
})

const setLoading = () => ({
    type: SET_LOADING,
})

export const addToFavorites = (obj) => ({
    type: ADD_TO_FAVORITES,
    payload: obj,
})

export const removeFromFavorites = (name) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: name,
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH,
})

export const loadingRecipes = (category) => (dispatch) => {
    dispatch(setLoading())
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((response) => response.json())
        .then((data) => dispatch(setRecipes(data.meals)))
}

export const loadingSearchRecipes = (str) => (dispatch) => {
    dispatch(setLoading())
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`)
        .then((response) => response.json())
        .then((data) => dispatch(setSearchRecipes(data.meals)))
}
