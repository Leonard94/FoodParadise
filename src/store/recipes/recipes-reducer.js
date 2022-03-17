import {
    SET_RECIPES,
    SET_LOADING,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    SET_SEARCH_RECIPES,
    CLEAR_SEARCH,
} from '../recipes/recipes-actions'

const initialState = {
    status: 'pending ', // loading, recived, rejected
    list: [],
    search: [],
    error: null,
    favorites: [],
}

export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPES: {
            // При получении данных посмотреть есть ли в избранном
            const data = action.payload.map((recipe) => {
                let index = state.favorites.findIndex(
                    (favorite) => favorite.name === recipe.strMeal
                )
                if (index >= 0) {
                    recipe.isFavorite = true
                }
                return recipe
            })

            return {
                ...state,
                status: 'recived',
                list: data,
            }
        }

        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            }

        case ADD_TO_FAVORITES: {
            const data = state.list.map((recipe) => {
                if (recipe.strMeal === action.payload.name) {
                    recipe.isFavorite = true
                }
                return recipe
            })

            return {
                ...state,
                favorites: [...state.favorites, action.payload],
                list: data,
            }
        }

        case REMOVE_FROM_FAVORITES: {
            const data = state.list.map((recipe) => {
                if (recipe.strMeal === action.payload) {
                    recipe.isFavorite = false
                }
                return recipe
            })

            return {
                ...state,
                favorites: state.favorites.filter(
                    (recipe) => recipe.name !== action.payload
                ),
                list: data,
            }
        }

        case SET_SEARCH_RECIPES: {
            return {
                ...state,
                search: action.payload,
                status: 'recived'
            }
        }

        case CLEAR_SEARCH:
            return {
                ...state,
                search: [],
            }

        default:
            return state
    }
}
