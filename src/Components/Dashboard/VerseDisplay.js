import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

function VerseDisplay() {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            height: '6vh',
            width: '100%',
            borderRadius: '20px',
            p: '12px',
            m: '12px',
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
