import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function TimeLogsTitle() {
    return (
        <Box>
            <Typography sx = {{
                 fontWeight: 'bold',
                 color: 'black',
                 fontSize: '50px',
                 textAlign: 'left',
            }}>
                {/* <ArrowBackIosIcon sx ={{
                    pt: '25px',
                    pl: '15px',
                    height: 60,
                    width: 60,
                    
                }} /> */}
                TIME LOGS
            </Typography>
        </Box>
    )
}

export default TimeLogsTitle
