import { FETCH_GAMES_DETAILS } from './gameActionTypes'

const initialState = {
    game: {},
    screenshot: {},
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES_DETAILS:
            return {
                ...state,
                game: action.payload.game,
                screenshot: action.payload.screenshot,
            }
        default:
            return state
    }
}

export default detailReducer
