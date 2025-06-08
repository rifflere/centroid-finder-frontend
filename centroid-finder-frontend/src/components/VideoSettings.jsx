// This component renders the video settings

// Parent -> SideBar
// children -> n/a
import { Slider, Tooltip, Typography } from '@mui/material'

export default function VideoSettings(){
    return (
        <div style={{ backgroundColor: 'lightyellow', margin: '5px', padding: '5px'}}>
            <h3>VideoSettings Component <bold>Pending...</bold></h3>
            {/* A helpful tooltip about color */}
            <Tooltip title="Use the color picker to the color from the frame.">
                <Typography variant="body1" component="p">Set Color</Typography>
                <div>
                    <input type="color" id="colorvalue" name="colorvalue" value="#000000" />
                </div>
            </Tooltip>

            {/* A helpful tooltip about threshhold */}
            <Tooltip title="The threshold determines how closely the color needs to match to be considered part of the tracked object.">
                <Typography variant="body1" component="p">Set Threshold</Typography>
                <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
            </Tooltip>
            
        </div>
        
    )
}