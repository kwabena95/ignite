import { fetchSearch } from '../redux/gameAction'
import { CLEAR_SEARCH } from '../redux/gameActionTypes'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
import { fadeIn } from '../animation'

const Nav = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    const inputHandler = (e) => {
        setSearchText(e.target.value)
    }
    const submitSearch = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(searchText))
        setSearchText('')
    }
    const clearSearch = () => {
        dispatch({
            type: CLEAR_SEARCH,
        })
    }
    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search" onSubmit={submitSearch}>
                <input type="text" value={searchText} onChange={inputHandler} />
                <button type="submit">Search</button>
            </form>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        /* outline: none; */
        padding: 0.5rem 1rem;
        width: 40vw;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
    }
`
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 2rem;
        height: 2rem;
    }
`
export default Nav
