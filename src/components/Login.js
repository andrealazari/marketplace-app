import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import {useNavigate} from 'react-router-dom'

export default function SignIn({login, setLogin, submitLogin, setLoggedIn, setIsLogged}) {

  const navigate = useNavigate()
  let errorMessage

  function submitLogin(event) {
    event.preventDefault();
    fetch('/api/sessions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(login)
    })
      .then(res => res.json())
      .then(user => {
        if(user.error) {
          errorMessage = <Typography component="h1" variant="h5">
          Please provide correct login information
          </Typography>
          navigate('/login')
        } else {
          setLoggedIn(user)
          setIsLogged(true)
          navigate('/')
        }
        
      })
  }


  return (

    <Container component="main" maxWidth="xs" sx={{mt: 10}}>
      <Card sx={{p: 2}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={submitLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={login.email}
              onChange={event => setLogin({...login, email: event.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={login.password}
              onChange={event => setLogin({...login, password: event.target.value})}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Login
            </Button>
            <Grid container>

              <Grid item>
                <Link to='/signup' variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
