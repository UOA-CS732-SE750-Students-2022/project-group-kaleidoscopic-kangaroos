/* eslint-disable no-unused-vars */
import {render} from '@testing-library/react'
import Settings from '../Settings';

it('Renders FlightListButton component correctly.', () => {
    const {queryByText} = render(<Settings />);
    expect(queryByText("Flight Information")).toBeTruthy();
    expect(queryByText("About")).toBeTruthy();
    expect(queryByText("Contact")).toBeTruthy();
    expect(queryByText("Settings")).toBeTruthy();
});