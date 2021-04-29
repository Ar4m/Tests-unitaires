import React from "react";
import ReactDOM from 'react-dom';
import Button from "../components/button";

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
//import Fetch from '../fetch'

afterEach(cleanup);

it("render without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div)
})

it("render button correctly", () => {
    const {getByTestId} = render(<Button label="click me pls"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me pls")
})
