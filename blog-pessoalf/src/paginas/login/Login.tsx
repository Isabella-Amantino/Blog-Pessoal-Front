import { Grid,TextField,Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React,{useState, useEffect, ChangeEvent} from "react";
import { Link,  Navigate,  useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login(){
   
    const [userLogin, setUserLogin] = useState<UserLogin>({
            id:0,
            nome: "",
            usuario: "",
            foto: "",
            senha: "",
            token: "",
        })

        let history = useNavigate();

        const dispatch = useDispatch();

        const [token, setToken]= useState('');

        function updatedModel(event: ChangeEvent<HTMLInputElement>){

            setUserLogin({
                ...userLogin,
                [event.target.name]: event.target.value,
            });
        }

        

        async function logar(event: ChangeEvent<HTMLFormElement>){
            event.preventDefault();
            try {
              await login('/usuarios/logar',userLogin, setToken);
              toast.success("Usuário logado com sucesso!",{
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            } catch (error) {
              toast.error("Dados do usuário inconsistentes. Erro ao logar!",{
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            }
          }
          
          useEffect(() => {
            if (token !== '') {
                dispatch(addToken(token));
              history('/home');
             }
           }, [token]);


    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textoLogin">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>)=>updatedModel(event)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                        <TextField value={userLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>)=>updatedModel(event)}  id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth/>
                        <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" className="loginButton">
                                    Logar
                                </Button>

                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to= "/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center"  className="textoLogin">Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className="imagemLogin">

            </Grid>
        </Grid>
    )
}

export default Login;