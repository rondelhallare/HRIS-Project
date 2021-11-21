import React from 'react'
import { Box } from '@mui/system';
import mail from '../../Assets/mail.png'

export const SupportLogo = () => {
    return (
        <Box sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src = {mail} alt = "" height = {250}/>
        </Box>
    )
}
