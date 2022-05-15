/* eslint-disable no-unused-vars */
import {render, fireEvent} from '@testing-library/react'
import FlightDetails from "../FlightDetails"

const mockState = {
    callsign: 'Test123',
    altitude: 5182,
    vSpeed: 20,
    hSpeed: 420,
    heading: 334.1,
    distance: 18582.58,
    squawk: 5565,
    engines: 'Twin turbo',
}

it('Renders Flight Details panel correctly.', () => {
    const {queryByText} = render(<FlightDetails details={mockState} />);

    // expect(queryByText("Plane Test123")).toBeTruthy();
    expect(queryByText("General")).toBeTruthy();
    expect(queryByText("Altitude")).toBeTruthy();
    expect(queryByText("Spatial")).toBeTruthy();
    expect(queryByText("Speed")).toBeTruthy();
    expect(queryByText("ATC Radio")).toBeTruthy();
});

it('Renders general pane correctly.', () => {
    const {queryByText} = render(<FlightDetails details={mockState} />);

    expect(queryByText("Altitude:")).toBeTruthy();
    expect(queryByText("Vertical Speed:")).toBeTruthy();
    expect(queryByText("Speed:")).toBeTruthy();
    expect(queryByText("Heading:")).toBeTruthy();
    expect(queryByText("Squawk:")).toBeTruthy();
    expect(queryByText("Engines:")).toBeTruthy();
})

it('Switches to spatial panel correctly.', () => {
    const {queryByText, queryByRole} = render(<FlightDetails details={mockState} />);

    const spatialButton = queryByRole("button", {
        name: "Spatial"
    });
    expect(spatialButton).toBeDefined();

    fireEvent.click(spatialButton);
    

    expect(queryByText("Heading:")).toBeTruthy();
    expect(queryByText("Squawk:")).toBeTruthy();

    expect(queryByText("Altitude:")).toBeFalsy();
    expect(queryByText("Vertical Speed:")).toBeFalsy();
    expect(queryByText("Speed:")).toBeFalsy();
    expect(queryByText("Engines:")).toBeFalsy();
    expect(queryByText("20m/min")).toBeFalsy();
    expect(queryByText("420km/hr")).toBeFalsy();
    expect(queryByText("Twin turbo")).toBeFalsy();
});

it('Switches to speed panel correctly.', () => {
    const {queryByText, queryByRole} = render(<FlightDetails details={mockState} />);

    const speedButton = queryByRole("button", {
        name: "Speed"
    });
    expect(speedButton).toBeDefined();

    fireEvent.click(speedButton);

    expect(queryByText("Vertical Speed:")).toBeTruthy();
    expect(queryByText("Horizontal Speed:")).toBeTruthy();

    expect(queryByText("Altitude:")).toBeFalsy();
    expect(queryByText("Heading:")).toBeFalsy();
    expect(queryByText("Distance:")).toBeFalsy();
    expect(queryByText("Squawk:")).toBeFalsy();
    expect(queryByText("Engines:")).toBeFalsy();
    expect(queryByText("5182m")).toBeFalsy();
    expect(queryByText("334.1°")).toBeFalsy();
    expect(queryByText("18582.58km")).toBeFalsy();
    expect(queryByText("5565")).toBeFalsy();
    expect(queryByText("Twin turbo")).toBeFalsy();
});

it('Switches to altitude panel correctly.', () => {
    const {queryByText, queryByRole} = render(<FlightDetails details={mockState} />);

    const altitudeButton = queryByRole("button", {
        name: "Altitude"
    });
    expect(altitudeButton).toBeDefined();

    fireEvent.click(altitudeButton);
    expect(queryByText("Altitude:")).toBeTruthy();

    expect(queryByText("Vertical Speed:")).toBeFalsy();
    expect(queryByText("Speed:")).toBeFalsy();
    expect(queryByText("Heading:")).toBeFalsy();
    expect(queryByText("Distance:")).toBeFalsy();
    expect(queryByText("Squawk:")).toBeFalsy();
    expect(queryByText("Engines:")).toBeFalsy();
    expect(queryByText("20m/min")).toBeFalsy();
    expect(queryByText("420km/hr")).toBeFalsy();
    expect(queryByText("334.1°")).toBeFalsy();
    expect(queryByText("18582.58km")).toBeFalsy();
    expect(queryByText("5565")).toBeFalsy();
    expect(queryByText("Twin turbo")).toBeFalsy();
});

it('Switches to ATC radio panel correctly.', () => {
    const {queryByText, queryByRole} = render(<FlightDetails details={mockState} />);

    const atcRadioButton = queryByRole("button", {
        name: "ATC Radio"
    });
    expect(atcRadioButton).toBeDefined();

    fireEvent.click(atcRadioButton);
});