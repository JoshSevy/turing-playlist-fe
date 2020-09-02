import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import PlaylistForm from './PlaylistForm'

describe('Playlist Form Component', () => {
  it('should display form correctly', () => {
    render (
      <PlaylistForm />
    )

    const songInput = screen.getByPlaceholderText(/input song name/i);
    const artistInput = screen.getByPlaceholderText(/input artist name/i);
    const linkInput = screen.getByPlaceholderText(/input url/i);
    const button = screen.getByRole('button');

    expect(songInput).toBeInTheDocument();
    expect(artistInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })

  it('should check inputs for change', () => {
    render(
      <PlaylistForm />
    )

    const songInput = screen.getByPlaceholderText(/input song name/i);
    const artistInput = screen.getByPlaceholderText(/input artist name/i);
    const linkInput = screen.getByPlaceholderText(/input url/i);
    const button = screen.getByRole('button');

    fireEvent.change(songInput, {target: {value: 'Swear'}});
    fireEvent.change(artistInput, {target: {value: 'Cariopea'}});
    fireEvent.change(linkInput, {target: {value: 'http'}});

    const songCheck = screen.getByDisplayValue(/swear/i);
    const artistCheck = screen.getByDisplayValue(/cariopea/i);
    const linkCheck = screen.getByDisplayValue(/http/i);

    expect(songCheck).toBeInTheDocument();
    expect(artistCheck).toBeInTheDocument();
    expect(linkCheck).toBeInTheDocument();
  })

})