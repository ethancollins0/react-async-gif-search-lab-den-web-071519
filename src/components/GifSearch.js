import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(event.target.text.value)
    }

    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input name='text' value={this.state.text} onChange={(event) => this.handleChange(event)}/>
                <button>Search</button>
            </form>
        )
    }




}