/* eslint-disable no-unused-vars */
import {render} from '@testing-library/react'
import FlightListButton from '../FlightListButton';

it('Renders Flight List Button component correctly.', () => {
    const {queryByText} = render(<FlightListButton />);
    expect(queryByText("Flight List")).toBeTruthy();
});