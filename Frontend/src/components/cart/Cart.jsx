import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";

import { useContext, useState, useEffect } from "react";
import Login from "../../components/Auth/Login";

import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider.jsx";

import { Grid, Typography, Button } from "@mui/material";
//components imports
import CartItems from "./CartItems";
import TotalBalence from "./TotalBalence";

//css Handelling File
import { AccountNotLoggedIn, CartButtonBox, CartHeaderBox, LeftCartComponent, MainGridContainer, PlaceOrderButton } from "./ComCart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { account } = useContext(DataContext);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false); // Define the open state

    const handleAddToCart = (itemId, quantity) => {
        console.log("Current account state in handleAddToCart:", account); // Debugging log

        dispatch(addToCart(itemId, quantity, account));
    };

    useEffect(() => {
        console.log("Account state updated:", account);
    }, [account]); // Log whenever account changes


    return (

        <div>
            {
                !account ? (
                    <MainGridContainer>
                        <AccountNotLoggedIn>
                            <Typography>Please log in to add items to your cart.</Typography>
                            <Button onClick={() => setOpen(true)}>Log In</Button>
                            <Login open={open} setOpen={setOpen} /> {/* Ensure setOpen is passed correctly */}
                        </AccountNotLoggedIn>
                    </MainGridContainer>
                ) : (
                    <MainGridContainer container>
                        <LeftCartComponent item lg={9} md={9} sm={12} xs={12}>
                            <CartHeaderBox>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </CartHeaderBox>
                            {
                                cartItems.length ? (
                                    cartItems.map(item => (
                                        <CartItems item={item} key={item.id} onAddToCart={handleAddToCart} />

                                    ))
                                ) : (
                                    <EmptyCart />
                                )
                            }
                            <CartButtonBox>
                                <Link to='/placeorder' style={{ textDecoration: 'none' }}>
                                    <PlaceOrderButton disabled={!account} >Place Order</PlaceOrderButton> </Link>
                            </CartButtonBox>
                        </LeftCartComponent>

                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalence cartItems={cartItems} />
                        </Grid>
                    </MainGridContainer>
                )}
        </div>
    );
};

export default Cart;
