import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

import React from 'react'

function SupportForm() {
    return (
        <Box sx={{
            Display: 'flex',
            alignItems: 'right',
            bgcolor: 'white',
            borderRadius: '0 20px 20px 0',
            pr: '15px',

        }}>

            <Box sx={{
                textAlign: 'left',
                mx: 'auto',
                width: '80vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'left',
                direction: 'column',
                p: 0,
                m: 0,
            }}>

                <Box sx={{
                    minWidth: '80%',
                }}>
                    <Typography sx={{
                        mt:'50px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '40px',
                    }}
                    >Send Us Your Concern!</Typography>

                    <br></br>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }} >

                        Complete Name</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""

                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                    />

                    <br></br>
                    <br></br>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }}>
                        Email</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue=""
                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                    />
                    <br></br>
                    <br></br>
                    
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '25px',
                        fontFamily: 'Montserrat',
                        pb: '8px',
                    }}>
                        Message</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue=""
                        sx={{
                            width: '100%',
                            borderRadius: '20px',
                        }}
                    />
                    <br></br>
                    <br></br>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button color="secondary" variant="contained" sx={{
                            fontSize: '25px',
                            fontWeight: 'medium',
                            color: '#FFFFFF',
                            borderRadius: '10px'
                        }}>
                            Submit
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default SupportForm
