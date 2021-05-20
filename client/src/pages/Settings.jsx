import React, { Component } from 'react'

class Settings extends Component {
    state = {
        color: '#212529',
        text: '#fff',
    }
    navChangeHandler = e => {
        this.setState({
            color: e.target.value
        })
    }
    textChangeHandler = e => {
        this.setState({
            text: e.target.value
        })
    }
    render () {
        const styleNav = {
            background: this.state.color,
            color: this.state.text,
        }
        return(
            <>
            <div className='thing'>
                <div className='bgcolor'>
                <label>Nav Color:</label> {' '}
                <input 
                onChange={this.navChangeHandler}
                value={this.setState.color}
                type="color"
                />
                </div>
                <div className='txtcolor'>
                <label>Text Color:</label> {' '}
                <input 
                onChange={this.textChangeHandler}
                value={this.setState.text}
                type="color"
                />
                </div>
            </div>
            <div style={styleNav}>
                <h1>Hello World</h1>
            </div>
            </>
        )
    }
}

export default Settings