import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {
  const[temas, setTemas] = useState<Tema[]>([])
  const[token, setToken] = useLocalStorage("token");
  let history = useNavigate()

  useEffect(()=>{
    if(token == ""){
      alert("Você precisa estar logado")
      history("/login")
    }
  },[token])

  async function getTema(){
    await busca("/temas", setTemas,{
      headers: {
        "Authorization": token
      }
    })
  }

  useEffect(()=>{
    getTema()
  }, [])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="updateList" size='small'   >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className="cancelList">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;