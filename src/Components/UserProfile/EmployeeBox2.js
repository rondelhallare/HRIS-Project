import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function EmployeeBox2() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'left',
            mx: 'auto',
            width: '80vh',
            p: 0,
            m: 0,
            borderRadius: '10px',
        }}>
            <Box sx = {{
                alignItems: 'left',

            }}>
                <Typography sx = {{
                    fontWeight: 'medium',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    Department
                </Typography>

                <Typography sx = {{
                    fontWeight: 'bold',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                   Human Resources
                </Typography>

                <br></br>

                <Typography sx = {{
                    fontWeight: 'medium',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    Role
                </Typography>

                <Typography sx = {{
                    fontWeight: 'Bold',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    System Admin
                </Typography>
            </Box>

        </Box>
    )
}

export default EmployeeBox2