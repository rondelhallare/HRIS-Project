import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'

function EventHighlight() {
    return (
        <Box>
            <Box sx={{
                borderRadius: '20px',
                bgcolor: 'primary.main',
                justifyContent: 'center',
                alignItems: 'center',
                m: '15px',
                width: '20vh',
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
                    Event
                </Typography>
            </Box>

            <Box sx={{
                borderRadius: '20px',
                bgcolor: 'secondary.main',
                p: '15px',
                m: '15px',
                height: '25vh',
                width: '100%',
                boxShadow: 10,
            }}>
                <Typography sx={{
                    fontWeight: 'medium',
                    fontSize: '20px',
                    color: 'white',
                    textAlign: 'left',
                    justifyContent: 'center',
                    aligntItems: 'left',
                    fontFamily: 'Montserrat',
                }}>
                   <li>Welcome Party</li>
                   <li>New Valorant Battelpass</li>
                   <li>Sees Optimum Pride EGHUHGEHHUGUH</li>

                </Typography>
            </Box>
        </Box>
    )
}

export default EventHighlight
