import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css'

function CadastroUsuario() {
    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: ""
        })

    useEffect(() => {
        if (userResult.id != 0) {
           history("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success("Usuário cadastrado com sucesso",{
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        } else {
            toast.error("Dados inconsistentes. Favor verificar as informações de cadastro.",{
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
    return (
        <Grid container direction="row" justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imgCad"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textoCad">Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth required/>
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}  id="usuario" label="Usuário (e-mail)" variant="outlined" name="usuario" margin="normal" fullWidth required/>
                        <TextField value={user.foto} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}  id="foto" label="URL da foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)}  id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth placeholder="Digite pelo menos 8 caracteres" required/>
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=>confirmarSenhaHandle(e)}  id="confirmarSenha" label="Confirmar senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained"  className="btnCancel">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" className="btnCad">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>

        </Grid>
    )
}

export default CadastroUsuario;
