import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api/api'
import { FETCH_GAMES_DETAILS, LOADING_DETAILS } from './gameActionTypes'

const loadDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING_DETAILS })

        const detailData = await axios.get(gameDetailsURL(id))
        const screenshotData = await axios.get(gameScreenshotURL(id))

        dispatch({
            type: FETCH_GAMES_DETAILS,
            payload: {
                game: detailData.data,
                screenshot: screenshotData.data,
            },
        })
    } catch (err) {
        throw new Error(err)
    }
}

export default loadDetails
