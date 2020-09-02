import React from 'react';

import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlaylistContainer from './PlaylistContainer';

describe('Playlist Container', () => {
  it('should display list of songs from state', () => {
    const songs = [
      {
        songName: "Swear",
        artistName: "Casiopea",
        link: "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
        id: 1
      },
      {
        songName: "Autumn Leaves",
        artistName: "Bill Evans Trio",
        link: "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
        id: 2
      },
      {
        songName: "Fair Weather",
        artistName: "Art Farmer",
        link: "https://www.youtube.com/watch?v=8-jfsUusSDQ",
        id: 3
      },
      {
        songName: "Django",
        artistName: "The Modern Jazz Quartet",
        link: "https://www.youtube.com/watch?v=wXnkD7_5vqM",
        id: 4
      }
    ]

    render(
      <PlaylistContainer 
        songs={songs}
      />
    )

    const song1 = screen.getByText(/swear/i);
    const song2 = screen.getByText(/autumn leaves/i);
    const song3 = screen.getByText(/django/i);

    expect(song1).toBeInTheDocument();
    expect(song2).toBeInTheDocument();
    expect(song3).toBeInTheDocument();
  })
})