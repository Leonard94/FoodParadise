import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import { rootReducer } from './root-reducer'
import { loadState, saveState } from './local-storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
    const persistedState = loadState()

    console.log(persistedState)

    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(applyMiddleware(thunk))
    )
    
    store.subscribe(
        throttle(() => {
            saveState({recipes: store.getState().recipes})
        }, 1000)
    )

    return store
}
