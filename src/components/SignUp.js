import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Routes, Route, useNavigate, Link} from 'react-router-dom'


export default function SignUp({user, setUser}) {

  const navigate = useNavigate()

  function submitSignUp(event) {
    event.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
      .then(res => res.json())

    navigate('/login')
  }

  return (
    <Box maxWidth="md"
      component="main" 
      sx={{mx: 'auto'}}
    >
      <Card sx={{p: 2}}>
        <CssBaseline />
        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={submitSignUp} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={user.name}
                  onChange={event => setUser({...user, name: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="avatar"
                  name="avatar"
                  required
                  fullWidth
                  id="avatar"
                  label="Avatar"
                  autoFocus
                  value={user.avatar}
                  onChange={event => setUser({...user, avatar: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={event => setUser({...user, email: event.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={event => setUser({...user, password: event.target.value })}
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
                <Link to='/login' variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>

  );
}