import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));


function Section() {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={1}>

         {/* First Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        mt: '3px',
                        boxShadow: 3,
                        borderRadius: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Date
                        </Typography>


                        <Box sx={{
                            borderRadius: '5px',
                            bgcolor: 'secondary.main',
                            boxShadow: 2,
                            borderRadius: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'medium',
                                fontFamily: 'Montserrat',
                                color: '#FFFFFF',
                            }}>
                                October 27, 2021
                            </Typography>
                        </Box>
                    </Item>

                </Grid>

                 {/* Second Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        mt: '3px',
                        boxShadow: 3,
                        borderRadius: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Date
                        </Typography>


                        <Box sx={{
                            borderRadius: '5px',
                            bgcolor: 'secondary.main',
                            boxShadow: 2,
                            borderRadius: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'medium',
                                fontFamily: 'Montserrat',
                                color: '#FFFFFF',
                            }}>
                                Present
                            </Typography>
                        </Box>
                    </Item>
                </Grid>


                {/* Third Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        mt: '3px',
                        boxShadow: 3,
                        borderRadius: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Time In
                        </Typography>


                        <Box sx={{
                            borderRadius: '5px',
                            bgcolor: 'secondary.main',
                            boxShadow: 2,
                            borderRadius: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'medium',
                                fontFamily: 'Montserrat',
                                color: '#FFFFFF',
                            }}>
                                10:00am
                            </Typography>
                        </Box>
                    </Item>
                </Grid>

                {/* Fourth Section of Attendance */}
                <Grid item xs>
                    <Item sx={{
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        minHeight: '75vh',
                        mt: '3px',
                        boxShadow: 3,
                        borderRadius: '10px',
                    }}>
                        <Typography sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                            color: '#FFFFFF',
                        }}>
                            Time Out
                        </Typography>


                        <Box sx={{
                            borderRadius: '5px',
                            bgcolor: 'secondary.main',
                            boxShadow: 2,
                            borderRadius: '10px',
                        }}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'medium',
                                fontFamily: 'Montserrat',
                                color: '#FFFFFF',
                            }}>
                                10:00pm
                            </Typography>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Section
