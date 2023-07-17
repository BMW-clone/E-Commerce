import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import jwtDecode from 'jwt-decode';

const pages = [
  { label: 'Home', link: '/Home' },
  { label: 'Used Cars', link: '/UsedCarsList' },
  { label: 'New Cars', link: '/NewCars' },
];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = async (keyword) => {
    setSearchKeyword(keyword);

    if (keyword.trim().length >= 2) {
      try {
        const response = await axios.get(`http://localhost:3000/newcars/search?keyword=${encodeURIComponent(keyword)}`);

        console.log(response.data);


        navigate(`/newcars/search/${encodeURIComponent(keyword)}`);
        setSearchKeyword('');
      } catch (error) {
        if (error) {
          navigate(`/newcars/search/${encodeURIComponent(keyword)}`);
        }
        console.error('Error during search:', error);

      }
    }
  };

  const handleSearchInputChange = (event) => {
    const keyword = event.target.value;
    handleSearch(keyword);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  //!token 
  const [token, setToken] = useState("")
  const tokenGrabber = () => {
    const cookies = new Cookies()
    setToken(jwtDecode(cookies.get("jwt-token")))
  }
  useEffect(() => {
    tokenGrabber()
  }, [])

  //!logout 
  const logout2 = (settings) => {
    if (settings === "Logout") {
      const cookies = new Cookies()
      cookies.remove("jwt-token")
      navigate("/")
    } else return

  }
  const navProfile = (setting) => {
    if (setting === "Profile" && token.role === "Client") {
      navigate("/UserProfile")
    } else if (setting === "Profile" && token.role === "Seller") {
      navigate("/SellerProfile")
    } else return
  }

  const adminDash = (setting) => {
    if (setting === "Dashboard") {
      navigate("/AdminDashboard")
    }
    else return
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  console.log("token role", token.role);

  return (
    <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png"
              alt="Logo"
              style={{
                height: '51px',
                marginTop: '8px',
                marginRight: '8px',
                width: '51px',
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flx', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              Menu
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
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Button
                    component={Link}
                    to={page.link}
                    sx={{ width: '100%', textAlign: 'center' }}
                  >
                    {page.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchKeyword}
              onChange={handleSearchInputChange}
              onKeyUp={handleSearchInputChange}
            />
          </Search>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={token.profilepic} />
              </IconButton>
            </Tooltip>
            {token.role === "admin" && <Menu
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
              {['Dashboard', 'Logout'].map((setting) => (
                <MenuItem key={setting} onClick={() => { handleCloseUserMenu(); logout2(setting); navProfile(setting); adminDash(setting); }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>}
            {(token.role === "Seller" || token.role === "Client") && <Menu
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
              {['Profile', 'Logout'].map((setting) => (
                <MenuItem key={setting} onClick={() => { handleCloseUserMenu(); logout2(setting); navProfile(setting); adminDash(setting); }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>}

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default ResponsiveAppBar;
