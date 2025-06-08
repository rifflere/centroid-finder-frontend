// This component renders the video settings

// Parent -> SideBar
// children -> n/a
import { Slider, Typography } from '@mui/material'

export default function VideoSettings(){
    return (
        <div style={{ backgroundColor: 'lightyellow', margin: '5px', padding: '5px'}}>
            <h3>VideoSettings Component <bold>Pending...</bold></h3>
            <Typography variant="body1" component="p">Set Color</Typography>
            <div>
                <input type="color" id="colorvalue" name="colorvalue" value="#000000" />
            </div>
            <Typography variant="body1" component="p">Set Threshold</Typography>
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
        </div>
        
    )
}