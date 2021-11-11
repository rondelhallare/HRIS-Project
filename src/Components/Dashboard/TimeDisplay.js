import React from 'react'
import { Box } from '@mui/system';

const TimeDisplay = () => {
    return (
        <Box sx = {{
            borderRadius: '10px',
            bgcolor: 'secondary.main',
            boxShadow: 8,
        }}>
            <Box color="secondary" sx={{
                fontSize: '30px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                p: '10px',
                m: '9px',
            }}>
                TIME: 8:20:45
            </Box>
        </Box>

    )
}

export default TimeDisplay
