import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }


    search = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`) 
            .then(resp => resp.json())
            .then(json => json.data)
            .then(data => data.map(item => item.images.original.url))
            .then(gifs => gifs.slice(0, 3))
            .then(gifs => this.setState({ gifs }))
    }

      render(){
          return (
            <div>
                <GifSearch search={(query) => this.search(query)}/>
                <GifList gifs={this.state.gifs}/>
            </div>
          )
      }



}