/* eslint-disable no-unused-vars */
import {render} from '@testing-library/react'
import Map from '../Map';

it('Renders Map component correctly.', () => {
    const {queryByText} = render(<Map />);
});