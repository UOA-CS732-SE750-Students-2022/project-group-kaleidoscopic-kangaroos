/* eslint-disable arrow-body-style */
import {
    Container,
    Typography,
} from '@mui/material'
import PlayAudio from 'react-simple-audio-player'

const radioChannels = require('../../data/atcRadio.json')

// Shows radio information about the plane.
const AtcRadioPanel = ({details}) => {
    return (
        <div className="flightDetailsRow">
            <Container>
                    {
                    radioChannels.map((radioChannel) => {
                        if(radioChannel.location_limit_N > details.latitude
                            && radioChannel.location_limit_S < details.latitude
                            && radioChannel.location_limit_E > details.longitude
                            && radioChannel.location_limit_W < details.longitude
                            ){
                            return(
                                <Container>
                                <Typography>
                                    <h3>{radioChannel.display_name}</h3>
                                    <b>Freq:</b> {radioChannel.display_freq} MHz
                                </Typography>
                                <PlayAudio url={radioChannel.stream_url}  />
                                <hr />
                                </Container>
                            );
                        }
                        return(<p>No radio channel found</p>);
                    })
                    }
            </Container>
        </div>
    );
}



export default AtcRadioPanel