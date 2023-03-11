import { Person, ViewDay } from "@material-ui/icons";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Logo from "../assets/logo.png";
import Selector from "../components/Selector";
import SideBar from "../components/SideBar";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecButton from "../components/buttons/SecButton";
import Posts from "../features/posts/Posts";
import User from "../features/userinfo/User";

const drawerWidth = 240;

export default function Homepage2() {
  const [page, setPage] = useState("posts");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "black",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        {/* List of Controls */}
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Grid container direction={"row"}>
            {/* <Box sx={{  backgroundColor: "white", display:"flex", alignContent: "center", justifyContent:"center" }}> */}
            <img
              src={Logo}
              width={24}
              height={24}
              style={{ margin: 4 }}
              alt="logo"
            />
            {/* </Box> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              fuzgram
            </Typography>
          </Grid>

          <Grid container direction={"row-reverse"}>
            <Box sx={{ marginX: 1 }}>
              <SecButton
                text="Preview"
                startIcon={<ViewDay />}
                onClick={() => {
                  console.log("hello");
                }}
              />
            </Box>

            <Box sx={{ marginX: 1 }}>
              <PrimaryButton
                text="Profile"
                startIcon={<Person />}
                onClick={() => {
                  console.log("hello");
                }}
              />
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>

      <SideBar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Grid container direction={"column"}>
          <User />
          <Grid>
            <Selector setPage={setPage} page={page} />
          </Grid>

          <Posts />
        </Grid>
      </Box>
    </Box>
  );
}
