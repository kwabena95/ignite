import { useDispatch } from 'react-redux'
import loadDetails from '../redux/detailAction'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getSmallImage } from '../utils'
import { popup } from '../animation'

const Game = ({ name, released, id, image }) => {
    const dispatch = useDispatch()
    const stringPathId = id.toString()
    const loadDetailHandler = () => {
        // stops us from scrolling the main page when game details modal pops opening
        document.body.style.overflow = 'hidden'
        dispatch(loadDetails(id))
    }
    return (
        <StyledGame
            variants={popup}
            initial="hidden"
            animate="show"
            layoutId={stringPathId}
            onClick={loadDetailHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={getSmallImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game
