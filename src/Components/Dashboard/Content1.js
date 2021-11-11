import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Content1() {
    return (
        <Box>
            <Box sx = {{
                borderRadius: '20px',
                bgcolor: 'primary.main',
                p: '10px',
                m: '10px',
                maxheight: '30vh',
                maxWidth: '40vh',
                boxShadow: 10,

            }}>
                <Typography sx = {{
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    Announcements
                </Typography>
            </Box>

            <Box sx = {{
                borderRadius: '20px',
                bgcolor: 'secondary.main',
                p: '15px',
                m: '15px',
                maxheight: '30vh',
                maxWidth: '100%',
                boxShadow: 10,
            }}>
                <Typography sx = {{
                    fontWeight: 'medium',
                    fontSize: '20px',
                    color: 'white',
                    textAlign: 'left',
                    justifyContent: 'left',
                }}>
                    RE: Special meeting on profit-sharing plan
                    <br></br>
                    <br></br>
                    The Team Leader would like to meet with all of the employees this Friday. 
                    The main agenda for the meeting is to discuss the possibility of a long-term profit-sharing. 
                    The Human Resource Information System will also be introduced and implemented in the company as soon as possible.
                </Typography>
            </Box>
        </Box>
    )
}

export default Content1
