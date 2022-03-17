import { SET_CATEGORIES, SET_LOADING } from './categories-actions'

const initialState = {
    status: 'pending ', // loading, recived, rejected
    list: [],
    error: null,
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                status: 'recived',
                list: action.payload,
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
