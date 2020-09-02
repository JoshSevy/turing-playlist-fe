import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should allow user to add a song to the songsQueue', () => {
    render(<App/>)
  })
})


