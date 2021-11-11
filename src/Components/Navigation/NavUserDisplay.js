import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function NavUserDisplay() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                borderRadius: '10px',
                maxHeight: '10vh',
                boxShadow: 10,
            }}>
                
                <Typography sx={{
                    fontSize: '25px',
                    fontWeight: 'medium',
                    color: 'white',
                    p: '5px',
                    m: '5px',
                    fontFamily: 'Montserrat',
                }}>
                    Rondel Hallare
                </Typography>
            </Box>
        </Box>
    )
}

export default NavUserDisplay
