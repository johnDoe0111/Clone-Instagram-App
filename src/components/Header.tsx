import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, InputBase, Toolbar } from '@mui/material';
import Logo from '../assets/images/LOGO.png';
import { FavoriteBorder, Home } from '@mui/icons-material';
import Chat from '../assets/icons/msg.png';
import Add from '../assets/icons/add.png';
import Trends from '../assets/icons/trends.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  boxShadow: '0 0  2px #8E8E8E',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
  color: '#8E8E8E'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  return (
    <Box >
      <AppBar 
        position="static"
        sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
            width: '960px'
        }} 
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box 
            component='img'
            src={Logo}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box 
            sx={{ 
              color: '#262626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '269px' 
            }}
          >
            <Home/>
            <Box 
              component='img' 
              src={Chat}
              sx={{ width: '20px' }}
            />
            <Box 
              component='img' 
              src={Add}
              sx={{ width: '20px' }}
            />
            <Box 
              component='img' 
              src={Trends}
              sx={{ width: '20px' }}
            />
            <FavoriteBorder/>
            <Box
              sx={{ 
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#C4C4C4' 
              }}
            ></Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}