import { AppBar, Box, Button, IconButton, InputBase, List, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledAppbar = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

export const StyledBox = styled(Link)(({ theme }) => ({
  marginLeft: '7%',
  lineHeight: 0,
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none',
  [theme.breakpoints.down('lg')]: {
    marginLeft: '2%',
  }
}))





export const StyledTypography = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;



//Search css handlere

export const SearchBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  width: '40%',
  borderRadius: 5,
  marginLeft: 10,
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    width: '35%'
  },
  [theme.breakpoints.down('md')]: {
    width: '30%',
  }
}))

export const SearchInput = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

export const SearchIconBox = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;

`;

//Button css Habdeler
export const MainButtonBox = styled(Box)(({ theme }) => ({
  margin: '0 0 0 auto',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  }

}))




export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > *': {
    marginRight: '40px !important',
    fontSize: '15px',
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    margin: 0,
  },

}))

export const CartIconBox = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
}))

export const LoginButton = styled(Button)`
    color: #2874f0;
    background:#fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow:none;
    font-weight: 600;
    height: 32px;
`


//Menu Icon Css Handel

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    color: 'inherit',

  }
}))


//List on Search.jsx

export const SearchList = styled(List)({
  position: 'absolute',
  backgroundColor: '#fff',
  color: '#000',
  marginTop: 36,


})
