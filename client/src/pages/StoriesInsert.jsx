
import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class StoriesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            rating: '',
            author: '',
        }
    }

    handleChangeInputName = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    }

    handleIncludeStory = async () => {
        const { title, rating, author } = this.state
        const payload = { title, rating, author }

        await api.insertStory(payload).then(res => {
            window.alert(`Story inserted successfully`)
            this.setState({
                title: '',
                rating: '',
                author: '',
            })
        })
    }

    render() {
        const { title, rating, author } = this.state
        return (
            <Wrapper>
                <Title>Create Story</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputName}
                />

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeAuthor}
                />

                <Button onClick={this.handleIncludeStory}>Add Story</Button>
                <CancelButton href={'/stories/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default StoriesInsert