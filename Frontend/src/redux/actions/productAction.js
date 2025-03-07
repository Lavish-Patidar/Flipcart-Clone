import axios from "axios";


const URL = 'https://flipcart-clone-api.vercel.app';
import * as actionTypes from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: res.data });

    } catch (error) {
        console.log('Error while calling Products', error);
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });

    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        console.log('Error in getting Product Details', error);
        dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_FAIL, payload: error.message });
    }
}
