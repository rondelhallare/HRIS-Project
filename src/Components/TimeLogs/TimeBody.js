import React from 'react'
import { Box } from '@mui/system';
import { Switch, Route, Link, BrowserRouter as router } from 'react-router-dom'
import Section from './Section';
import TimeLogsTitle from './TimeLogsTitle';

function TimeBody() {
    return (
        <Box>

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
                height: '80vh',
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
