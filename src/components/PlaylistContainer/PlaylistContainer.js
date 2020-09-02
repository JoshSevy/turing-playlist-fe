import React from 'react';

const PlaylistContainer = (props) => {
  return (
    <article className="playlist-container">
      {props.songs.map(song => {
        return <p></p>
      })}
    </article>
  )
}


export default PlaylistContainer;