import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import User from "../features/userinfo/User";
import Selector from "../components/Selector";
import { Divider } from "@mui/material";
import Posts from "../features/posts/Posts";

const Homepage = () => {

  const [page, setPage] = useState("posts");

  return (
    <Grid container direction="column">

      <User />

      <Divider variant="fullWidth"/>

    <Grid justifyContent="center" container marginTop={1}>
          <Selector setPage={setPage} page={page} />
    </Grid>

    <Grid justifyContent="center" container>
      {
        page === "posts" ?
        <Posts/> :
        <h1>Links</h1>
      }
    </Grid>

    </Grid>
  );

}

export default Homepage;
