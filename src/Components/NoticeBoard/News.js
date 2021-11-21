import React from 'react'
import { Grid, Typography, Card, Container, CardContent, Image } from '@mui/material'
import announce from '../../Assets/announce.png'

const News = () => {
    return (
        <div className="card-wrapper news">
            <div className="box">
                <Card variant="outlined" className="card" sx={{ maxHeight: '100vh', boxShadow: 10, }} >
                    <div className="title">
                        <Typography sx={{ fontWeight: 'medium', fontFamily: 'Montserrat', fontSize: '25px', }}>
                            News
                        </Typography>
                    </div>
                    <CardContent>
                        <Grid container sx={{ justifyContent: "center", }} >
                            <Grid item sm={5} xs={5} lg={10}>
                                <img src={announce} alt="" style={{ width: "100%", }} />
                            </Grid>
                        </Grid>
                        <Typography  sx = {{ textAlign: "justify", fontWeight: 'medium', fontSize: '15px'  }}>
                            An Antarctic penguin’s misadventure has seen it waddle ashore almost 2,000 miles from home. 
                            The Adélie penguin, which is native to Antarctica, washed up on the coast of New Zealand on Wednesday.
                            <br /> <br />
                            The rare visitor was spotted by resident Harry Singh, just south of Christchurch in Birdlings Flat on the southern island. 
                            A video captured by Singh shows the penguin wandering around on the beach. In conclusion, Penguins are awesome.
                            <br /> <br />
                            -Pengu-
                            <br /> <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default News