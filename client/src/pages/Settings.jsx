import React, { Component } from 'react'

class Settings extends Component {
    state = {
        color: '#212529',
        text: '#fff',
        fontFamily: 'arial',
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
    fontChangeHandler = e => {
        this.setState({
            font: e.target.value
        })
    }
    render () {
        const styleNav = {
            background: this.state.color,
            color: this.state.text,
            fontFamily: this.state.font,
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
                <div className='font'>
                <label>Font:</label> {' '}
                <select
                onChange={this.fontChangeHandler}
                value={this.setState.font}>
                    <option value='arial'>Arial</option>
                    <option value='cambria'>Cambria</option>
                    <option value='comic sans ms'>Comic Sans</option>
                    <option value='courier new'>Courier New</option>
                    <option value='georgia'>Georgia</option>
                    <option value='times'>Times</option>
                    <option value='verdana'>Verdana</option>
                </select>
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