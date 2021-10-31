import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function BoxContent() {
    return (
        <Box>
            <Box sx = {{
                borderRadius: '20px',
                bgcolor: 'primary.main',
                p: '15px',
                m: '15px',
                width: '20%',
                boxShadow: 10,

            }}>
                <Typography sx = {{
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    Groups
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
                    HRIS DEPARTMENT
                    <br></br>
                    <br></br>
                    Please finish coding the design of the overall system.
                    After that we can start with the integration.
                    <br></br> 
                    <br></br> 
                    Sincerely, HRIS BOSS.

                </Typography>
            </Box>
        </Box>

    )
}

export default BoxContent
