import React from 'react'
import { Box } from '@mui/system';
import ClockIn from './ClockIn';
import BodyTitle from './BodyTitle';
import TimeDisplay from './TimeDisplay';
import BoxContent from './BoxContent';
import Content1 from './Content1';
import EventHighlight from './EventHighlight';
import VerseDisplay from './VerseDisplay';
import CalendarDash from './CalendarDash';


function Body() {
    return (
        <Box>
            <BodyTitle />

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: '-10px',
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
                </Box>

                {/* right */}
                <Box sx={{
                    // flexGrow: 1,
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'right',
                        alignItems: 'right',
                        textAlign: 'right',
                    }}>

                    </Box>

                    <Box sx={{
                        mt: '-100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'right',
                        textAlign: 'right',
                    }}>
                        {/* Event Component */}
                        <Box sx={{
                            width: '100%',
                            pl: '10vh',
                        }}>
                            <Box>
                                <CalendarDash />
                            </Box>

                            <Box>
                                <EventHighlight />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                mt: '-10px',
                display: 'absolute',
                bottom: 0,
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
            }}>
                <VerseDisplay />
            </Box>
        </Box>


    )
}

export default Body
