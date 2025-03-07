import { Box, Button, styled } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { DataContext } from '../../context/DataProvider.jsx'; // Import DataContext

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 30px',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}));

const ProductImg = styled('img')(({ }) => ({
    width: '100%',
    padding: '15px',
}));

const ProductButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width: '46%',
        fontSize: '10px',
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            width: '48%',
            fontSize: '14px',
        }
    }
}));

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { account } = useContext(DataContext); // Access account from context

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity, account)); // Pass account details
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%', }}>
                <ProductImg src={product.detailUrl} alt="ProductIMG" />
            </Box>
            <ProductButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}> <Cart /> Add To Cart</ProductButton>
            <ProductButton variant="contained" style={{ background: '#fb541b' }}> <Flash /> Buy Now</ProductButton>
        </LeftContainer>
    )
}

export default ActionItem;
