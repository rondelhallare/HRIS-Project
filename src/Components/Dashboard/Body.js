import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
// import ClockIn from './ClockIn';
// import BodyTitle from './BodyTitle';
// import ResponsiveDrawer from './ResponsiveDrawer';
// import TimeDisplay from './TimeDisplay';
// import CalendarDash from './CalendarDash';


function Body() {
    return (
        <Box>

            {/* <BodyTitle /> */}

            <Box sx={{
                 display: 'flex',
                 alignItems: 'left',
                 textAlign: 'left',
                 justifyContent: 'left',
            }}>

                {/* <CalendarDash /> */}

                {/* <ClockIn />

                <TimeDisplay /> */}

            </Box>
        </Box>
        
    )
}

export default Body
