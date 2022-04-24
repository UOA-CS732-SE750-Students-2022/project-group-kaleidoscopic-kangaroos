import {render} from '@testing-library/react'
import FlightDetails from "../FlightDetails"

it('renders flight details panel correctly', () => {
    const mockState = {
        callsign: 'Test123',
        altitude: 5182,
        vSpeed: 20,
        hspeed: 420,
        heading: 334.1,
        distance: 18582.58,
        squawk: 5565,
        engines: 'Twin turbo',
    }

    const {queryByText} = render(<FlightDetails details={mockState} />);

    expect(queryByText("Altitude: 5182m")).toBeDefined();
    expect(queryByText("Vertical Speed: 20m/min")).toBeDefined();
    expect(queryByText("Speed: 420km/hr")).toBeDefined();
    expect(queryByText("Heading: 334.1°")).toBeDefined();
    expect(queryByText("Distance: 18582.58km")).toBeDefined();
    expect(queryByText("Squawk: 5565")).toBeDefined();
    expect(queryByText("Engines: Twin turbo")).toBeDefined();

});