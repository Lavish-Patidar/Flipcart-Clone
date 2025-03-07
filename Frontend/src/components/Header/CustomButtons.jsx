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


const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);
    const openLoginDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> : <LoginButton variant='contained' onClick={() => openLoginDialog()}>Login</LoginButton>
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
