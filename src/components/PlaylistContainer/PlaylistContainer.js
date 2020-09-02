import React from 'react';

import './PlaylistContainer.css'

const PlaylistContainer = (props) => {
  return (
    <article className="playlist-container">
      {props.songs.map(song => {
        return (
          <article className="song">
           <p>{song.artistName} --- {song.songName}</p>
          </article>
        )
      })}
    </article>
  )
}


export default PlaylistContainer;