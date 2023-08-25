import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from 'react';
import { Dots } from "react-activity";
import { Navigate, createSearchParams, useNavigate } from "react-router-dom";

import {loginUser} from "../services/Account"

export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [token, setToken] = useState(null);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const getUser = () => {
    navigate({
      pathname:"/",
      search: createSearchParams({
        username:username
      }).toString()
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    async function logUser() {
      try {
        const response = await loginUser(username, password)
        if(response.success){
          setToken(response.data.token)
          localStorage.setItem(username, response.data.token)
        }else{
          setMsg(response.error.message)
        }
      } catch (error) {
        setError(error)
        console.log(error)
      }
      finally{
        setLoaded(true);
      }
    }
    logUser();
  }

  return (
    <>
      {token && getUser()}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{  
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={(e) => {setUsername(e.target.value);}}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {setPassword(e.target.value);}}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to={`/account/register`} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div className='errorMsg'>{msg}</div>
      </Container>
      {!loaded && <Dots/>}
    </>
  );
}