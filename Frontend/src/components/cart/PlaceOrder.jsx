import React, { useState, useContext } from 'react';
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import TotalBalance from './TotalBalence'; // Ensure this is imported
import { DataContext } from '../../context/DataProvider.jsx';
import { useSelector } from 'react-redux';
import { PlaceOrderBox, PlaceOrderLeftBox, PlaceOrderMainBox } from './ComCart.jsx';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cartAction.js';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
    const { account } = useContext(DataContext);
    const { cartItems } = useSelector((state) => state.cart);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('COD');
    const dispatch = useDispatch();

    if (!account) {
        return (
            <Typography variant="h6" color="error">
                You must be logged in to place an order.
            </Typography>
        );
    }


    const handlePlaceOrder = async () => {
        if (!address) {
            toast.error('Address is required');
            return;
        }
        if (paymentMethod !== 'COD') {
            toast.error('Only COD payment method is available at this time');
            return;
        }

        if (cartItems.length === 0) {
            toast.error('Your cart is empty. Please add items to your cart before placing an order.');
            return;
        }

        dispatch(clearCart());
        toast.success('Order Place Sussessfull');

    };

    return (
        <PlaceOrderBox>
            <Typography variant="h4" gutterBottom>Place Your Order</Typography>

            <PlaceOrderMainBox>
                <PlaceOrderLeftBox>
                    <TextField
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <RadioGroup
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        row
                    >
                        <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
                        <FormControlLabel value="Online" control={<Radio />} label="Online Payment" />
                    </RadioGroup>
                </PlaceOrderLeftBox>
                <TotalBalance cartItems={cartItems} />
            </PlaceOrderMainBox>
            <Link to='/'>
                <Button variant="contained" color="primary" onClick={handlePlaceOrder} style={{ marginTop: '20px' }}>
                    Place Order
                </Button>
            </Link>
        </PlaceOrderBox>
    );
};

export default PlaceOrder;
