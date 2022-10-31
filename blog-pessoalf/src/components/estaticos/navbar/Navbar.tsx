import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import "./Navbar.css"


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar  className="navBarra" variant="dense">
                    <Box display="flex" justifyContent="space-between" style={{ width:"100%" }}>
                        <Typography variant="h5" color="inherit"  style={{ cursor: "pointer" }} >
                            Blog Pessoal
                        </Typography>
                    

                    <Box display="flex">
                    <Box display="flex" justifyContent="start" gap={1} alignItems="center" mx={1} style={{ cursor: "pointer" }}>
                        <HomeRoundedIcon ></HomeRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Home |
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="start" gap={1} alignItems="center" mx={1} style={{ cursor: "pointer" }}>
                                <WebRoundedIcon></WebRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Postagens |
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" gap={1} alignItems="center">
                            <ListAltRoundedIcon></ListAltRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Temas |
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" gap={1} alignItems="center">
                                <PostAddRoundedIcon></PostAddRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema |
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }} display="flex" justifyContent="start" gap={1} alignItems="center">
                                <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;