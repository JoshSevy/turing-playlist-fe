import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

import { getPlaylist } from '../helpers/api'

describe('App Component', () => {
  it('should allow user to add a song to the songsQueue', () => {
    render(      
      <App />
      )

    screen.debug()
      
    const songInput = screen.getByPlaceholderText(/input song name/i);
    const artistInput = screen.getByPlaceholderText(/input artist name/i);
    const linkInput = screen.getByPlaceholderText(/input url/i);
    const button = screen.getByRole('button');

    fireEvent.change(songInput, { target: { value: 'Swear' } });
    fireEvent.change(artistInput, { target: { value: 'Cariopea' } });
    fireEvent.change(linkInput, { target: { value: 'http' } });

    fireEvent.click(button)
      

    
  })
})


