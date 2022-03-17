export const SET_CATEGORIES = '@@categories/SET_CATEGORIES'
export const SET_LOADING = '@@categories/SET_LOADING'

const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
})

const setLoading = () => ({
    type: SET_LOADING,
})

export const loadCategories = () => (dispatch) => {
    dispatch(setLoading())

    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((resp) => resp.json())
        .then((data) => dispatch(setCategories(data.categories)))
        .catch((err) => console.log(err))
}
