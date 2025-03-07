import axios from 'axios';

const API_URL = 'http://localhost:8000/order'; // Backend order endpoint

export const placeOrder = async (orderData, token) => {
    try {
        const response = await axios.post(API_URL, orderData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include the token in the headers
            }
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error placing order:', error.response.data); // Log the error response for debugging
        throw error.response.data; // Throw the error response for handling in the component
    }
};
