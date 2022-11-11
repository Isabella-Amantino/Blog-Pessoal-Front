import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import "./Navbar.css"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from "react-toastify";


function Navbar() {
    const token = useSelector<TokenState, TokenState ["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    let history = useNavigate()

    function goLogout(){
        dispatch(addToken(""));
        toast.info("Usuário deslogado",{
            position:"top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history("/login")
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent =   <AppBar position="static">
        <Toolbar className="navBarra" variant="dense">
            <Box display="flex" justifyContent="space-between" style={{ width: "100%" }}>
                <Typography variant="h5" color="inherit" style={{ cursor: "pointer" }} >
                    Blog Pessoal
                </Typography>


                <Box display="flex">
                <Link to= "/home" className="text-decorator-none">
                    <Box display="flex" justifyContent="start" gap={1} alignItems="center" mx={1} className="cursor">
                        <HomeRoundedIcon ></HomeRoundedIcon>
                        <Typography variant="h6" color="inherit">
                            Home |
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box display="flex" justifyContent="start" gap={1} alignItems="center" mx={1} className="cursor">
                        <WebRoundedIcon></WebRoundedIcon>
                        <Typography variant="h6" color="inherit">
                            Postagens |
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className="cursor" display="flex" justifyContent="start" gap={1} alignItems="center">
                        <ListAltRoundedIcon></ListAltRoundedIcon>
                        <Typography variant="h6" color="inherit">
                            Temas |
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className="cursor" display="flex" justifyContent="start" gap={1} alignItems="center">
                        <PostAddRoundedIcon></PostAddRoundedIcon>
                        <Typography variant="h6" color="inherit">
                            Cadastrar tema |
                        </Typography>
                    </Box>
                </Link>

                        <Box mx={1} className="cursor" display="flex" justifyContent="start" gap={1} alignItems="center" onClick={goLogout}>
                            <ExitToAppRoundedIcon></ExitToAppRoundedIcon>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                </Box>
            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;