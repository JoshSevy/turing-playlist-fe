import React from 'react';

const PlaylistContainer = (props) => {
  return (
    <article className="playlist-container">
      {props.songs.map(song => {
        return <p>{song.artistName} --- {song.songName}</p>
      })}
    </article>
  )
}


export default PlaylistContainer;