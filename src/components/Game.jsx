import { useDispatch } from 'react-redux'
import loadDetails from '../redux/detailAction'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Game = ({ name, released, id, image }) => {
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        dispatch(loadDetails(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`

export default Game
