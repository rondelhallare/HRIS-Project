import { Box } from '@mui/system';
import React from 'react'
import SimpleAccordion from './SimpleAccordion';

function UserProf() {
    return (
       <Box sx = {{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        minHeight: '100vh',
        width: 'auto',
       }}>
        <Box sx = {{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
        }}>
            <SimpleAccordion />
        </Box>
           
       </Box>
    )
}

export default UserProf;