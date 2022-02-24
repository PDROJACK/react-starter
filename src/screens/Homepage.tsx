import React from 'react'
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import CineCard from '../components/CineCard';

function Homepage() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header/>
            </Grid>

            <Grid item>
                banner
                {/* <Bannar/> */}
            </Grid>

            <Grid item xs={12} md={11} lg={10}>
                <Grid direction="row">
                    Movie
                    <CineCard/>
                </Grid>

                <Grid direction="row">
                    TV
                    <CineCard/>
                </Grid>
            </Grid>

            <Grid item>
                footer
            </Grid>
        </Grid>
    )
}

export default Homepage

