import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const UserTitle = () => {
    return (
        <Box>
            <Typography sx = {{
                 fontWeight: 'bold',
                 color: 'black',
                 fontSize: '50px',
                 textAlign: 'center',
            }}>
                USER PROFILE 
            </Typography>
        </Box>
    )
}

export default UserTitle