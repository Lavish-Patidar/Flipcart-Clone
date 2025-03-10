import axios from 'axios';
const URL = 'https://flipcart-clone-api.vercel.app';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error in Signup authentication', error);

    }
}


export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error in login authentication', error);
        return error.response;
    }
}


