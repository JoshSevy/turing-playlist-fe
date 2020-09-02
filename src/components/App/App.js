import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import PlaylistForm from '../PlaylistForm/PlaylistForm'

import { getPlaylist } from '../helpers/api'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      
    }

    this.getSongFromForm = this.getSongFromForm.bind(this)
  }

  componentDidMount(){
    getPlaylist()
      .then(playlist => this.setState({songQueue: playlist}))
  }

  getSongFromForm(song) {
    this.state.songQueue.push(song);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <PlaylistForm 
              getSongFromForm={this.getSongFromForm}
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
