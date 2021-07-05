// Dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Imports
import gameReducer from './gameReducer'
import detailReducer from './detailReducer'

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk))
const rootReducer = combineReducers({
    games: gameReducer,
    details: detailReducer,
})

export const store = createStore(rootReducer, composeEnhancer)
