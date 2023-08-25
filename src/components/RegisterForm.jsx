
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {registerUser} from "../services/Account"
import { useState } from 'react';
import { Navigate, createSearchParams } from "react-router-dom";

const theme = createTheme();

export default function RegisterForm() {
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function resetForm() {
    setUsername('');
    setPassword('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    async function createUser() {
      try {
        const response = await registerUser(username, password)
        if(response.success){
          setMsg(response.data.message)
          setToken(response.data.token)
          localStorage.setItem(username, response.data.token)
        }else{
          setMsg(response.error.message)
        }
        resetForm();
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
    createUser();
  }

  return (
    <>
    {error && <p>{error.message}</p>}
    {token && <Navigate to="/" replace={true} /> }
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    onChange={(e) => {setUsername(e.target.value);}}
                  />
                  <div className='errorMsg'>{msg}</div>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e) => {setPassword(e.target.value);}}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={`/account/login`} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}