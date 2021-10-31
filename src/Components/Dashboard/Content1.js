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
                width: '40%',
                boxShadow: 10,

            }}>
                <Typography sx = {{
                    fontWeight: 'bold',
                    fontSize: '25px',
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
                height: '25vh',
                width: '100%',
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
                    John Doe would like to meet with employees this Friday
                    to discuss the possibility of <br></br> 
                    a long-term profit-sharing 
                    program. 

                </Typography>
            </Box>
        </Box>
    )
}

export default Content1
