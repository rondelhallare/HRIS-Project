import React from 'react'
import { Box } from '@mui/system';
import SupportHeader from './SupportHeader';
import SupportForm from './SupportForm';

function SupportBack() {
    return (
        <Box sx={{
            background: 'linear-gradient(0deg, #0ABAB5, #0ABAB5, #C5FFFD)',
            height: "calc(100vh - 80px)",
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
        }}>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',

            }}
            >
                <Box sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    boxShadow: 20,
                    borderRadius: '20px',
                }}>
                    <SupportHeader />
                    <SupportForm />
                </Box>
            </Box>
        </Box>

    )
}

export default SupportBack
