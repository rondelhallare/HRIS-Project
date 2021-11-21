import React from 'react'
import { Box } from '@mui/system';
import Section from './Section';
import TimeLogsTitle from './TimeLogsTitle';
import BgHexa from '../../Assets/BgHexa.png';

function TimeBody() {
    return (
        <Box sx = {{
            backgroundImage: `url(${BgHexa})`,
            height: "calc(100vh - 80px)",
        }}>

            {/* Main Body */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <TimeLogsTitle />
            </Box>

            {/* Background */}
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'pengu.main',
                boxShadow: 5,
                borderRadius: '10px',
                minHeight: '78vh',
                width: '80%',
                p: '0 3%',
                m: '0 10%',
                
            }}>
                
                {/* Section Components */}
                <Box sx = {{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Section />
                </Box>
            </Box>
        </Box>
    )
}

export default TimeBody
