import { SET_RECIPE, SET_LOADING } from './recipe-actions'

const initialState = {
    status: 'pending ', // loading, recived, rejected
    recipe: [],
    error: null,
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPE:
            return {
                ...state,
                status: 'recived',
                recipe: action.payload,
            }
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            }
        default:
            return state
    }
}
