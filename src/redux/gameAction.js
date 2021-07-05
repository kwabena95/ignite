// Dependencies
import axios from 'axios'

// imports
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api/api'
import { FETCH_GAMES } from './gameActionTypes'

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
    } catch (err) {}
}
