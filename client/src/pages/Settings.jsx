import React, { Component } from 'react'

class Settings extends Component {
    state = {
        color: '#212529'
    }
    navChangeHandler = e => {
        this.setState({
            color: e.target.value
        })
    }
    render () {
        const styleNav = {
            background: this.state.color
        }
        return(
            <div style={styleNav} className='thing'>
                <input 
                onChange={this.navChangeHandler}
                value={this.setState.color}
                type="color"
                />
            </div>
        )
    }
}

export default Settings