import React from 'react'

function GifList(props) {

    function renderGifs(){
        if (props.gifs){
            return props.gifs.map(url => { return <li><img src={url}></img></li> })
        }
    }

    return (
        <div>
            <ul>{renderGifs()}</ul>
        </div>
    )


}

export default GifList