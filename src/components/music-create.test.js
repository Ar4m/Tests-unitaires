import { MusicCreate } from "./music-create"
import { render } from "@testing-library/react"
import { screen } from '@testing-library/jest-dom'
import React from 'react'

test('scenario d\'exemple', function () {
    render(<MusicCreate title="Ajouter une musique">Bonjour</MusicCreate>)
    const title = screen.getByText('Ajouter une musique')
    expect(title).toBeInTheDocument()
})