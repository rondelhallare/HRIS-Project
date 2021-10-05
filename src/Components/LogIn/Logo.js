import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import id from '../../Assets/id.png'

const Logo = () => {
    return (
        <Box sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src = {id} alt = "" height = {250}/>
        </Box>

    )
}

export default Logo