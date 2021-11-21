import React from 'react'
import { Grid, Typography, Card, CardContent, Image } from '@mui/material'
import announce from '../../Assets/announce.png';

const Announcements = () => {
    return (
        <div className="card-wrapper">
            <Card variant="outlined" className="card announcements" sx = {{boxShadow: 20,}}>
                <div className="title">
                    <Typography sx = {{
                        fontSize: '25px',
                        fontWeight: 'medium',
                        fontFamily: 'Montserrat',
                    }}>
                        Announcement
                    </Typography>
                </div>
                <CardContent>
                    <Grid container style={{ justifyContent: "center", alignItems: "center", boxShadow: 10, }}>
                        <Grid>
                            <img src={announce} alt="" style={{ maxWidth: "50vh", maxHeight: "80vh" }} />
                        </Grid>
                        <Grid item md style={{  textAlign: "justify" }}>
                            <Typography variant="p" sx = {{textAlign: "justify", fontSize: "20px",fontWeight: 'medium', fontFamily: 'Montserrat'}}>
                                Welcome to the System's Notice Board! where you can access and see all of the announcements, events and news within the company.
                                <br />
                                <br />
                                The Official presentation of the 
                                Human Resources Infromation System will be presented on the first week of December. We invite everyone to participate and watch the presentation.
                                See you there!
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>

    )
}

export default Announcements