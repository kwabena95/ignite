import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import gameReducer from './gameAction'

const rootReducer = combineReducers({
    games: gameReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
