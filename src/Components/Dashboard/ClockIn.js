import React from 'react'
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const ClockIn = () => {
    return (
        <Box sx = {{
            display: 'flex',
        }}>
            <Button color="secondary" variant="contained" sx={{
                fontSize: '25px',
                fontWeight: 'medium',
                color: '#FFFFFF',
                borderRadius: '10px',
                p: '10px',
                m: '10px',
                boxShadow: 8,
                zIndex: '-1',
            }}>
                CLOCK IN
            </Button>
        </Box>

    )
}

export default ClockIn
