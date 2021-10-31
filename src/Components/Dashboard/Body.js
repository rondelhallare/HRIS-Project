import React from 'react'
import { Box } from '@mui/system';
import ClockIn from './ClockIn';
import BodyTitle from './BodyTitle';
import TimeDisplay from './TimeDisplay';
// import CalendarDash from './CalendarDash';


function Body() {
    return (
        <Box>

            <BodyTitle />

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                p: '10px',
                m: '10px',
            }}>

                <Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'left',
                        textAlign: 'left',
                    }}>
                        <Box>
                            <ClockIn />
                        </Box>

                        <Box>
                            <TimeDisplay />
                        </Box>
                    </Box>

                    <Box>
                        <Content1 />
                    </Box>

                    <Box>
                        <BoxContent />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center',

                    }}>
                        <VerseDisplay />
                    </Box>
                </Box>



                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',
                        textAlign: 'right',
                    }}>
                        {/* UserDisplay Component */}
                        <Box sx={{

                        }}>
                            <UserDisplay />
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'right',
                        textAlign: 'right',
                    }}>
                        {/* Event Component */}
                        <Box sx={{
                            pl: '10vh',
                        }}>
                            <EventHighlight />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>


    )
}

export default Body
