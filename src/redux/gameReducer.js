import { FETCH_GAMES, FETCH_SEARCH, CLEAR_SEARCH } from './gameActionTypes'

const initialState = {
    newGames: [],
    popular: [],
    upcoming: [],
    searched: [],
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        case FETCH_SEARCH:
            return {
                ...state,
                searched: action.payload.searched,
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                searched: [],
            }
        default:
            return state
    }
}

export default gameReducer
