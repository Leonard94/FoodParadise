const API_KEY = '1'
const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`

export const getAllCategories = async () => {
    const resp = await fetch(`${BASE_URL}categories.php`)
    return await resp.json()
}

export const getAllRecipesOfCategory = async (category) => {
    const resp = await fetch(`${BASE_URL}filter.php?c=${category}`)
    return await resp.json()
}

export const getRecipe = async (name) => {
    const resp = await fetch(`${BASE_URL}search.php?s=${name}`)
    return await resp.json()
}

export const getSearchResults = async (str) => {
    const resp = await fetch(`${BASE_URL}search.php?s=${str}`)
    return await resp.json()
}
