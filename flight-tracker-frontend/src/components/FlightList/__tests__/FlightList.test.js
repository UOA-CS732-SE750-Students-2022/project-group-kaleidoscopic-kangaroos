/* eslint-disable no-unused-vars */
import {render, fireEvent} from '@testing-library/react'
import FlightList from "../FlightList"

it('Renders Flight List component correctly.', () => {
    const {queryByText, queryByTestingId} = render(<FlightList />);
    expect(queryByText("Flight List")).toBeTruthy();
});