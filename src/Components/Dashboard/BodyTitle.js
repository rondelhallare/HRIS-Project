import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const BodyTitle = () => {
    return (
        <Box>
            <Typography sx = {{
                 fontWeight: 'bold',
                 color: 'black',
                 fontSize: '50px',
                 textAlign: 'left',
            }}>
                DASHBOARD
            </Typography>
        </Box>
    )
}

export default BodyTitle
