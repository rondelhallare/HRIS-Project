import React from 'react'
import { Box } from '@mui/system';
import Header from './Header';
import Form from './Form';

function Back() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                bgcolor: 'secondary.main',
                minHeight: '100vh',
                width: 'auto',
            }}
            >
                <Box sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                }
                }
                >
                    <Header />
                    <Form />
                </Box>
            </Box >
        </Box>



    )
}

export default Back