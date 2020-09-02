import React, { Component } from 'react';

import './PlaylistForm.css'


class PlaylistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      artist: '',
      link: '',
      addSong: {}
    }
    this.onSubmit = this.onSubmit.bind(this)

  }

  formOutput = (e) => {
    const formData = e.target.name;
    const formValue = e.target.value;
    this.setState({ [formData]: formValue });
  }

  onSubmit(e){
    e.preventDefault()
    const song = {
      songName: this.state.song,
      artistName: this.state.artist,
      link: this.state.link
    }
    this.props.getSongFromForm(song)
    this.setState({
      song: "",
      artist: "",
      link: ""
    })

  }

  render() {
    return (
      <section className="playlist-form-container">
        <form className="playlist-form">
          <h3>add a song to your playlist:</h3>
          <label htmlFor="song">Song Name:</label>
          <input 
            name="song"
            type="text" 
            value={this.state.song}
            onChange={this.formOutput}
            placeholder="input song name"
          />
          <label htmlFor="artist">Artist Name:</label>
          <input 
            name="artist"
            type="text" 
            value={this.state.artist}
            onChange={this.formOutput}
            placeholder="input artist name"
          />
          <label htmlFor="link">Url:</label>
          <input
            name="link" 
            type="text" 
            value={this.state.link}
            onChange={this.formOutput}
            placeholder="input url link to song"
          />
          <button
            onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </section>
    )
  }
}


export default PlaylistForm;