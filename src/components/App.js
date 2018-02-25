import React, { Component } from 'react';
import '../index.css'
import OperationMenu from './OperationMenu';
import SpotifyPlayer from 'react-spotify-player';

const size = {
    width: '100%',
    height: 300
}

class App extends Component {
    render() {
        return (
            <div>
                <p>I tried the whole React game making thing and it didn't work out (Something something lack of frameworks with real documentation or any sort of developer community)... So here's an EXCITING calculator</p>
                <OperationMenu />
                <p className='makeSomeSpace'>Spice up your math-ing with some music</p>
                <p>Here's some chill stuff</p>
                <SpotifyPlayer
                    uri='spotify:user:1131108562:playlist:3a9WSQbFMkxfXKc2KqwT4w'
                    size={size}
                    theme='black'
                    view='list'
                />
                <p>Here's some other good stuff</p>
                <SpotifyPlayer
                    uri='spotify:user:erroriott:playlist:2DOOdbV59tujKG1uXwl6a5'
                    size={size}
                    theme='black'
                    view='list'
                />
            </div>
        )
    }
}

export default App;