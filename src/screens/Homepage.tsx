import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import User from "../features/userinfo/User";
import Posts from "../features/posts/Posts";
import { useState } from "react";
import Selector from "../components/Selector";
import SideBar from "../components/SideBar";
import { Grid, Icon, SvgIcon } from "@mui/material";

const drawerWidth = 240;

export default function Homepage2() {
  const [page, setPage] = useState("posts");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: "#122620",
          }}
        >
          {/* List of Controls */}
          <p>Preview</p>
        </AppBar>
        <Grid container direction={"column"} >
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
