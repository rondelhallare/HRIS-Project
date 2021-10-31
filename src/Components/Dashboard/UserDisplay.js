import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function UserDisplay() {
    return (
        <Box>
            <Box sx={{
                bgcolor: 'primary.main',
                borderRadius: '10px',
                height: '7vh',
            }}>


                <Typography sx={{
                    fontSize: '30px',
                    fontWeight: 'medium',
                    color: 'Black',
                    p: '10px',
                    m: '10px',
                    fontFamily: 'Montserrat',
                }}>
                    Rondel Hallare
                </Typography>
            </Box>
        </Box>
    )
}

export default UserDisplay
