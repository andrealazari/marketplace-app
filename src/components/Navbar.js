import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StoreIcon from '@mui/icons-material/Store';
import {Routes, Route, Link} from 'react-router-dom'

const pages = ['Products'];
const settings = ['Profile', 'Purchases', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({logOut, loggedIn}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let bar

  if(loggedIn.userId > 0) {
    bar = <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MarketPlace
            </Typography></Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                
              >
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to='/product'>Sell Item</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to='/purchases'>My Purchases</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to='/cart'>My Cart</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none' }} to='/sales'>My Items to Sell</Link></MenuItem>
                
                
              </Menu>
            </Box>
            <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 30,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MP
            </Typography></Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none', color: 'white' }} to='/product'>Sell Item</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none', color: 'white' }} to='/purchases'>My Purchases</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>My Cart</Link></MenuItem>
                <MenuItem onClick={handleCloseNavMenu}><Link style={{ textDecoration: 'none', color: 'white' }} to='/sales'>My Items to Sell</Link></MenuItem>

            </Box>
            <Typography component='p' variant='p' sx={{fontSize: 15, pr: 1}}>
              Hi {loggedIn.userName}!
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={loggedIn.avatar} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                
                <MenuItem onClick={handleCloseUserMenu}><Link style={{ textDecoration: 'none' }} to='/' onClick={logOut}>Logout</Link></MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  } else {
    bar = <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MarketPlace
            </Typography></Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              
            </Box>
            <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 10,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MarketPlace
            </Typography></Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}}}>
     

            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}><Link style={{ textDecoration: 'none' }} to='/signup'>SignUp</Link></MenuItem>
                <MenuItem onClick={handleCloseUserMenu}><Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  }

  return (
    <>
     {bar}
    </>
  );
};
export default ResponsiveAppBar;
