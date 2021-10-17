import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const EmployeeBox1 = () => {
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
                    Display Name
                </Typography>

                <Typography sx = {{
                    fontWeight: 'bold',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                   Rondel Hallare
                </Typography>

                <br></br>

                <Typography sx = {{
                    fontWeight: 'medium',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    Email
                </Typography>

                <Typography sx = {{
                    fontWeight: 'Bold',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    InsecurePengu@email.com
                </Typography>

                <br></br>

                <Typography sx = {{
                    fontWeight: 'medium',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    Password
                </Typography>

                <Typography sx = {{
                    fontWeight: 'Bold',
                    fontSize: '25px',
                    textAlign: 'left',
                }}>
                    ***********
                </Typography>
            </Box>

        </Box>
    )
}

export default EmployeeBox1