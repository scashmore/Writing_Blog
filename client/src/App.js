import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components'
import { StoriesList, StoriesInsert, StoriesUpdate, Settings } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/stories/list" exact component={StoriesList} />
                <Route path="/stories/create" exact component={StoriesInsert} />
                <Route path="/settings" exact component={Settings} />
                <Route
                    path="/stories/update/:id"
                    exact
                    component={StoriesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App