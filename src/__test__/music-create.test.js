import React from 'react'
import ReactDOM from 'react-dom'
import MusicCreate from "../components/music-create";

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MusicCreate />, div)

  expect(div.querySelector("label").textContent).toBe(
      "Nom: ",
      "Artiste: ",
      "Genre: ",
      "Url: ",
      "Qui propose cette musique ? ",
      "Date: "
    );
})