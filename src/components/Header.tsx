import AppBar from '@mui/material/AppBar/AppBar';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Typography from '@mui/material/Typography/Typography';
import React from 'react'

function Header() {
    return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CiniBuy
                  </Typography>
                  <Button color="inherit">User</Button>
                </Toolbar>
              </AppBar>
            </Box>
          );
}

export default Header
