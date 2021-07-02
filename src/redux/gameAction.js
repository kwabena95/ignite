import { FETCH_GAMES } from './gameActionTypes'

const initialState = {
    games: [],
    popular: [],
    upcoming: [],
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default gameReducer
