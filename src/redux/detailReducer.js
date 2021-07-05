import { FETCH_GAMES_DETAILS, LOADING_DETAILS } from './gameActionTypes'

const initialState = {
    game: { platforms: [] },
    screenshot: { results: [] },
    isLoading: true,
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GAMES_DETAILS:
            return {
                ...state,
                game: action.payload.game,
                screenshot: action.payload.screenshot,
                isLoading: false,
            }
        case LOADING_DETAILS:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state
    }
}

export default detailReducer
