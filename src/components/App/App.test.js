import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

import { getPlaylist } from '../helpers/api'

jest.mock('../helpers/api');



describe('App Component', () => {
  it('should allow user to add a song to the songsQueue', async () => {

    getPlaylist.mockResolvedValue([
        {
        artistName: 'ABBA',
        songName: 'Dancing Queen',
        url: 'http:fakeurl.com'
        }
      ]
    )

    render(      
      <App />
      )

    const songInput = screen.getByPlaceholderText(/input song name/i);
    const artistInput = screen.getByPlaceholderText(/input artist name/i);
    const linkInput = screen.getByPlaceholderText(/input url/i);
    const button = screen.getByRole('button');

    fireEvent.change(songInput, { target: { value: 'Swear' } });
    fireEvent.change(artistInput, { target: { value: 'Cariopea' } });
    fireEvent.change(linkInput, { target: { value: 'http' } });

    fireEvent.click(button)
    

    const song1 = await waitFor( () => screen.getByText(/dancing queen/i));
    const song2 = await waitFor( () => screen.getByText(/swear/i));

    expect(song1).toBeInTheDocument();
    expect(song2).toBeInTheDocument();

  })
})


