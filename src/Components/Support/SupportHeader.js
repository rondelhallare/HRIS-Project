import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { SupportLogo } from './SupportLogo';

const SupportHeader = () => {
    return (
        <Box sx={{
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mx: 'auto',
            width: '80vh',
            p: 0,
            m: 0,
            borderRadius: '20px 0 0 20px',
        }}>
             <Box>
                <SupportLogo />
            </Box>

            <Typography variant="h2" sx={{
                fontSize: '30px',
                fontWeight: 'medium',
                pb: '10px',
                m: '30px',
                mt: '-5px',
            }}>
                If you have any concerns and problems, feel free to contact us and leave an email.
                We would be more than happy to respond to you. Thank you and have a nice day!
            </Typography>

        </Box >

    )
}

export default SupportHeader
