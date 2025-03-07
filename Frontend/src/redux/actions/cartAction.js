import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Import toast

export const addToCart = (id, quantity, account) => async (dispatch) => {

    if (!account) {
        toast.error('Please log in to add items to the cart.');
        return;
    }

    try {
        const { data } = await axios.get(`https://flipcart-clone-api.vercel.app/product/${id}`);
        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
        toast.success('Item added to cart!'); // Success notification


        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
        toast.success('Item added to cart!');

    } catch (error) {
        console.log('Error while calling cart API');
        toast.error('Failed to add item to cart.');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    toast.success('Item removed from cart!');
};

// Action to clear the cart
export const clearCart = () => (dispatch) => {
    dispatch({
        type: actionTypes.CART_REST,
        payload: [],
    });

}
