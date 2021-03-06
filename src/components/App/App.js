import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import PlaylistForm from '../PlaylistForm/PlaylistForm'
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer'

import { getPlaylist } from '../helpers/api'

import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      error: ""
    }

    this.getSongFromForm = this.getSongFromForm.bind(this)
  }

  componentDidMount(){
    getPlaylist()
      .then(playlist => this.setState({songQueue: playlist}))
      .catch(error => this.setState({error: new Error('Something went wrong')}))
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
            <PlaylistContainer
              songs={this.state.songQueue}  
            />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;

App.propTypes = {
  songQueue: PropTypes.array,
  error: PropTypes.string
}