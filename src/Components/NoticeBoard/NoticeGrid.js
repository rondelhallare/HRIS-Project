import React from 'react'
import './NoticeGrid.css'
import { Grid, Typography, Container } from '@mui/material'
import Announcement from './Announcement'
import Event from './Event'
import News from './News'


const App = () => {
    return (
        <div className="App">
            <Container variant="fluid">
                <Grid container style={{ alignItems: "center", }}>
                    <Grid item>
                        <Typography variant="h2" sx={{
                            mt: '25px',
                            color: 'black',
                            fontSize: '50px',
                            textAlign: 'left',
                            fontWeight: 'medium',
                            fontFamily: 'Montserrat',
                        }}>
                            Notice Board
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item lg sx={{ mb: 1.5 }}>
                        <Announcement />
                        <Event />
                    </Grid>
                    <Grid item component="aside" lg={3}>
                        <News />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App