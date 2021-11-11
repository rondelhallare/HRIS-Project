import { Box } from '@mui/system';
import React from 'react'
import SimpleAccordion from './SimpleAccordion';
import bg2 from '../../Assets/bg2.png';

function UserProf() {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            bgcolor: 'white',
            height: "calc(100vh - 80px)",
            width: 'auto',
            backgroundImage: `url(${bg2})`,
        }}>
            <Box sx={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
            }}>
                <SimpleAccordion />
            </Box>

        </Box>
    )
}

export default UserProf;