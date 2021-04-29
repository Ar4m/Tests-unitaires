import React from "react";
import ReactDOM from 'react-dom';
import Navbar from "../components/navbar";

import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
//import Fetch from '../fetch'

afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement('nav');
    ReactDOM.render(<Navbar></Navbar>, div)
})

it("render button correctly", () => {
    const {getByTestId} = render(<Navbar label="Partager ta musique"></Navbar>)
    expect(getByTestId('lien')).toHaveTextContent("Partager ta musique")
})
