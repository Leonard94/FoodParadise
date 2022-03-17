export const selectInfoCategories = (state) => {
    return {
        error: state.categories.error,
        status: state.categories.status,
        qty: state.categories.list.length,
    }
}

export const selectAllCategories = (state) => state.categories.list
