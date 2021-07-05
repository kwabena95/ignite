import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api/api'
import { FETCH_GAMES_DETAILS } from './gameActionTypes'

const loadDetails = (id) => async (dispatch) => {
    try {
        const detailData = await axios.get(gameDetailsURL(id))
        const screenshotData = await axios.get(gameScreenshotURL(id))

        dispatch({
            type: FETCH_GAMES_DETAILS,
            payload: {
                game: detailData.data,
                screenshot: screenshotData.data.results,
            },
        })
    } catch (err) {
        throw new Error(err)
    }
}

export default loadDetails
