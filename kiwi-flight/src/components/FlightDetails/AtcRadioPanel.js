/* eslint-disable arrow-body-style */
import {
    Container,
    ListItem,
    Typography,
} from '@mui/material'
import PlayAudio from 'react-simple-audio-player'

import radioChannels from '../../data/atcRadio.json';

// Shows radio information about the plane.
const AtcRadioPanel = ({details}) => {
    const radioList = [];

    // Get all the radio channels that are available.
    radioChannels.forEach((radioChannel) => {
        if(radioChannel.location_limit_N > details.latitude
            && radioChannel.location_limit_S < details.latitude
            && radioChannel.location_limit_E > details.longitude
            && radioChannel.location_limit_W < details.longitude
            ){
            radioList.push(
                <ListItem key={radioChannel.display_freq} >
                    <PlayAudio url={radioChannel.stream_url}  />
                    <Container sx={{
                    display: "flex",
                    flexDirection: "column"
                    }}>
                        <Typography variant='h6'>
                        {radioChannel.display_name}
                        </Typography>
                        <Typography>
                            <b>Freq:</b> {radioChannel.display_freq} MHz
                        </Typography>
                    </Container>                    
                </ListItem>
            );
        }
    })

    // List all the radio channels, or if there are no radio channels, show a message.
    return (
        <div className="flightDetailsRow">
            <Container>
                {radioList.length ? radioList : <p>No radio channels available</p>}
            </Container>
        </div>
    );
}



export default AtcRadioPanel