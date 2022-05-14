/* eslint-disable no-unused-vars */
import {render} from '@testing-library/react'
import Planes from '../Planes';

it('Renders Planes component correctly.', () => {
    const {queryByText} = render(<Planes />);
});