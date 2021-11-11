import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

function VerseDisplay() {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            maxHeight: '8vh',
            maxWidth: '100%',
            borderRadius: '20px',
            boxShadow: 10,
            p: '10px',
            m: '10px',
        }}>
            <Typography sx={{
                fontSize: '25px',
                fontWeight: 'medium',
                fontFamily: 'Montserrat',
            }}>
                Psalm 34:18 “The lord is near to the broken hearted and saves the crushed spirit”
            </Typography>
        </Box>
    )
}

export default VerseDisplay
