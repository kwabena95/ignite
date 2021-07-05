// Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Imports
import gameReducer from './gameReducer'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))
const rootReducer = combineReducers({
    games: gameReducer,
})

export const store = createStore(rootReducer, composeEnhancer)
