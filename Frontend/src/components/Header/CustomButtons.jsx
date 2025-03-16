import { Badge, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartIconBox, LoginButton, Wrapper } from './ComHeader';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';

//Import the links 
import Login from '../Auth/Login';
import Profile from './Profile';


import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomButtons = () => {
    const isSmallScreen = useMediaQuery('(max-width:899px)');


    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);
    const openLoginDialog = () => {
        setOpen(true);
    }


    const ScreenChecker = () => {
        if (isSmallScreen) {
            return (
                <Link to='/login'>
                    <LoginButton variant='contained'>Login</LoginButton>
                </Link>)
        }
        else {
            return <LoginButton variant='contained' onClick={() => openLoginDialog()}>Login</LoginButton>;
        }

    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> : <ScreenChecker />

            }

            <Typography style={{ marginTop: 3, width: 130 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3 }}> More </Typography>
            <CartIconBox to='/cart'>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </CartIconBox>

            <Login open={open} setOpen={setOpen} />

        </Wrapper>
    )
}

export default CustomButtons
