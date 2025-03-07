import { Box, Dialog, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { CreateAccount, LoginButton, LoginContainer, LoginImage, LoginText, LoginWraper, RequestOTPButton, } from "./ComAut";
import { authenticateLogin, authenticateSignup } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

const accountInt = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading: 'Create Your account Here',
    }
}

const signupIntValue = {
    address: '',
    name: '',
    email: '',
    password: '',
    phone: '',
}

const Login = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInt.login);
        setError(false);
    };

    const [account, toggleAccount] = useState(accountInt.login);

    const togglesignup = () => {
        toggleAccount(accountInt.signup);
    }

    // States for adding the data 
    const [signup, setSignup] = useState(signupIntValue);
    const { setAccount } = useContext(DataContext);
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let res = await authenticateSignup(signup);
        if (!res);
        handleClose();
        setAccount(signup.name)
    }

    const LoginInt = {
        email: '',
        password: '',
    }
    const [login, setLogin] = useState(LoginInt)
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const [error, setError] = useState(false)
    const loginUser = async () => {
        console.log("Login credentials being sent:", login); // Log the credentials for debugging
        let res = await authenticateLogin(login);

        console.log("Login response:", res); // Debugging log
        console.log("Response data:", res.data); // Log the response data

        if (res.status === 200) {

            handleClose();
            setAccount(res.data.data.name);
        } else {
            setError(true);
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { maxWidth: "unset" } }}
        >
            <LoginWraper>
                <Box style={{ display: "flex", height: "100%" }}>
                    <LoginImage>
                        <Typography variant="h5"> {account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>
                            {account.subheading}
                        </Typography>
                    </LoginImage>

                    {account.view === 'login' ?
                        <LoginContainer>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='email' label="Email/Mobile number" />
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Passwords" />
                            {error ? <Typography>Please enter valid email  and password</Typography> : null}
                            <LoginText>
                                By continuing, you agree to ShopNow's Terms of Use and Privacy
                                Policy.
                            </LoginText>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <RequestOTPButton>Request OTP</RequestOTPButton>
                            <CreateAccount onClick={() => { togglesignup() }}>New To ShopNow Create an account </CreateAccount>
                        </LoginContainer>
                        :
                        <LoginContainer>
                            <TextField variant="standard" name="name" onChange={(e) => onInputChange(e)} label="Enter Name" />
                            <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
                            <TextField variant="standard" name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
                            <TextField variant="standard" name="address" onChange={(e) => onInputChange(e)} label="Enter Address" />
                            <TextField variant="standard" name="phone" onChange={(e) => onInputChange(e)} label="Enter Phone Number" />

                            <LoginButton onClick={() => signupUser()}>SignUp</LoginButton>
                        </LoginContainer>
                    }
                </Box>
            </LoginWraper>
        </Dialog>
    );
};

export default Login;
