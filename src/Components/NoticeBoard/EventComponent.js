import React from 'react'
import { Grid, Typography, Card, Container, CardContent } from '@mui/material'
import announce from '../../Assets/announce.png'


const EventComponent = ({ announce, text }) => {
    return (
        <Card>
            <CardContent>
                <Grid container style={{ justifyContent: "center",boxShadow: 10, }}>
                    <Grid item sm={5} xs={5} lg={12}>
                        <img src={announce} alt="" style={{ width: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
                <Typography variant="p" component="p" style={{ textAlign: "justify" }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default EventComponent