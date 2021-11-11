import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarDash() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '20px'
        }
        }>
            <Box sx={{
                borderRadius: '15px',
                bgcolor: 'primary.main',
                alignSelf: 'center',
                maxHeight: '10vh',
                width: '25vh',
                p: '5px',
                m: '5px',
                boxShadow: 10,
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>
                    Calendar
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '80%',
                bgcolor: 'primary.main',
                borderRadius: '10px',
                p: '8px',
                m: '8px',
                boxShadow: 10,
            }}>
                <Box >
                    <Calendar />
                </Box>
            </Box>
        </Box>
    )
}

export default CalendarDash
