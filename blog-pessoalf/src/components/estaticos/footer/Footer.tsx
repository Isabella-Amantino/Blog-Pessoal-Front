import { Grid , Typography} from "@material-ui/core";
import { Box } from "@mui/material";
import {Instagram, Facebook, LinkedIn} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

    const token = useSelector<TokenState, TokenState ["tokens"]>(
        (state) => state.tokens
    );
    
    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center" className="footerBarra">
        <Grid alignItems="center" item xs={12}>
            <Box>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/isabellaamantino" target="_blank">
                        <Facebook className="redes" />
                    </a>
                    <a href="https://www.instagram.com/isa_amantino/" target="_blank">
                        <Instagram className="redes" />
                    </a>
                    <a href="https://www.linkedin.com/in/isabella-amantino-908520175" target="_blank">
                        <LinkedIn className="redes" />
                    </a>
                </Box>
            </Box>
            <Box className="box1">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;