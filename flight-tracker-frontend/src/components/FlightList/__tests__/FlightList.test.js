/* eslint-disable no-unused-vars */
import {render} from '@testing-library/react'
import FlightList from "../FlightList"

it('Renders Flight List component correctly.', () => {
    const {queryByTestId} = render(<FlightList />);
});