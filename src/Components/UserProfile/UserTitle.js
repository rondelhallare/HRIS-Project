import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UserTitle = () => {
    return (
        <Box>
            <Typography sx = {{
                 fontWeight: 'bold',
                 color: 'blac',
                 fontSize: '50px',
                 textAlign: 'left',
            }}>
                <ArrowBackIosIcon sx ={{
                    pt: '15px',
                    height: 60,
                    width: 60,
                    
                }} />
                USER PROFILE 
            </Typography>
        </Box>
    )
}

export default UserTitle