const url = 'http://localhost:8080/api/v1/playlist'

export const getPlaylist = () => {
  return fetch(url)
    .then(res => res.json())
}