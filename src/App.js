import Home from './pages/Home'
import Nav from './components/Nav'
import GlobalStyles from './components/GlobalStyles'
import { Route } from 'react-router'

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            <Route path={['/game/:id', '/']}>
                <Home />
            </Route>
        </div>
    )
}

export default App
