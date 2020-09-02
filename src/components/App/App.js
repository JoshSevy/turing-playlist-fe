import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';

import { getPlaylist } from '../helpers/api'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount(){
    getPlaylist()
      .then(playlist => this.setState(playlist))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
