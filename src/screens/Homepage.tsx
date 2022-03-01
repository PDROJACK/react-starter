import React from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import CineCard from "../components/CineCard";
import HeroImage from "../components/HeroImage";
import { Typography } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import Products from "../features/product/Products";

function Homepage() {
  return (
    <Grid container direction="column">
      
      <Grid item container>
        <Grid item sm={12}>
          <Header />
        </Grid>
      </Grid>

      {/* <Grid item container>
        <Grid item sm={12}>
          <HeroImage />
        </Grid>
      </Grid> */}

      <Grid item container>
        <Grid item lg={1} xs={0}/>
        
        <Grid item lg={8} direction="row">

            <Products />

        </Grid>

        <Grid item lg={2} direction="row">

            <Products />

        </Grid>
            
        <Grid item lg={1} xs={0}/>


        {/* <Grid item sm={10}>
          <Grid direction="row" lg={8}>
            <Typography variant="h5" component="h5">
              TV
            </Typography>
            <CineCard />
          </Grid>
        </Grid> */}

      </Grid>

      <Grid item>footer</Grid>
    </Grid>
  );
}

export default Homepage;
