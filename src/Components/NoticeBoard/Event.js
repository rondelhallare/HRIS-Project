import React from 'react'
import { Grid, Typography, Card, Container, CardContent } from '@mui/material'
import event_1 from '../../Assets/event_1.jpg'
import event_2 from '../../Assets/event_2.jpg'
import EventComponent from './EventComponent'

const Events = () => {
    const
        dummyText = "There are no events posted yet. We will update you as soon as we can. Thank you!"
    return (
        <div className="card-wrapper events">
            <div className="box">
                <Card className="card" sx = {{boxShadow: 10,}}>
                    <div className="title">
                        <Typography sx = {{
                            fontSize: '25px',
                            fontWeight: 'medium',
                            fontFamily: 'Montserrat',
                        }}>
                            Events
                        </Typography>
                    </div>
                    <CardContent style={{ padding: 0 }}>
                        <Grid container spacing={2} >
                            <Grid item sm>
                                <EventComponent image={event_1} text={dummyText} />
                            </Grid>
                            <Grid item sm>
                                <EventComponent image={event_2} text={dummyText} />
                            </Grid>
                            <Grid item sm>
                                <EventComponent image={event_1} text={dummyText} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Events