// Dependencies
import axios from 'axios'

// imports
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL,
} from '../api/api'
import { FETCH_GAMES, FETCH_SEARCH } from './gameActionTypes'

export const loadGames = () => async (dispatch) => {
    // Fetch data
    try {
        const popularGamesData = await axios.get(popularGamesURL())
        const newGamesData = await axios.get(newGamesURL())
        const upcomingGamesData = await axios.get(upcomingGamesURL())
        dispatch({
            type: FETCH_GAMES,
            payload: {
                popular: popularGamesData.data.results,
                upcoming: upcomingGamesData.data.results,
                newGames: newGamesData.data.results,
            },
        })
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchSearch = (game_name) => async (dispatch) => {
    try {
        const searchGame = await axios.get(searchGameURL(game_name))

        dispatch({
            type: FETCH_SEARCH,
            payload: {
                searched: searchGame.data.results,
            },
        })
    } catch (err) {
        throw new Error(err)
    }
}
