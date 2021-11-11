import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'

function EventHighlight() {
    return (
        <Box sx = {{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                borderRadius: '15px',
                bgcolor: 'primary.main',
                alignSelf: 'center',
                p: '5px',
                m: '5px',
                maxHeight: '8vh',
                width: '25vh',
                boxShadow: 10,
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>
                    Event
                </Typography>
            </Box>

            <Box sx={{
                borderRadius: '20px',
                bgcolor: 'primary.main',
                p: '10px',
                m: '10px',
                maxheight: '20vh',
                minWidth: '70%',
                boxShadow: 10,
            }}>
                <Typography sx={{
                    fontWeight: 'medium',
                    fontSize: '20px',
                    color: 'white',
                    textAlign: 'left',
                    fontFamily: 'Montserrat',
                }}>
                   <li style = {{color: "white", backgroundColor: "#0ABAB5", borderRadius: "10px", padding: "5px", marginBottom: "10px"}}>Welcome Party of New Employees</li>
                        <li style = {{color: "white", backgroundColor: "#0ABAB5", borderRadius: "10px", padding: "5px", marginBottom: "10px"}}>Online Meeting On: November 1, 2021</li>
                        <li style = {{color: "white", backgroundColor: "#0ABAB5", borderRadius: "10px", padding: "5px", marginBottom: "10px"}}>Integration of BackEnd On: November 10, 2021</li>
                        <li style = {{color: "white", backgroundColor: "#0ABAB5", borderRadius: "10px", padding: "5px"}}>Project Presentation: Human Resources Information System</li>
                </Typography>
            </Box>
        </Box>
    )
}

export default EventHighlight
