import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    FART
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/stories/list" className="nav-link">
                                List Stories
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/stories/create" className="nav-link">
                                Create Stories
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/settings" className="nav-link">
                                Settings
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links