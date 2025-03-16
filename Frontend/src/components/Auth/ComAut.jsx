import { Box, Button, styled, Typography } from "@mui/material";

export const LoginWraper = styled(Box)({
    height: '70vh',
    width: '90vh',
})

export const LoginImage = styled(Box)(({ theme }) => ({
    background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat',
    width: '25%',
    padding: '45px 35px',
    color: "white",
    fontWeight: '600',
    [theme.breakpoints.down(600)]: {
        display: 'none'
    }
}));

export const LoginContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div , & > button , & > p {
    margin-top: 20px
    }

`

export const LoginButton = styled(Button)({
    textTransform: "none",
    background: '#FB6418',
    color: '#fff',
    height: 48,
    borderRadius: '2px',
})

export const RequestOTPButton = styled(Button)({
    textTransform: "none",
    background: '#fff',
    color: '#2874f0',
    height: 48,
    borderRadius: '2px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
});

export const LoginText = styled(Typography)({
    fontSize: 12,
    color: '#8787',

})

export const CreateAccount = styled(Typography)({
    fontSize: 14,
    textAlign: 'center',
    color: '#2874f0',
    fontWeight: '600',
    cursor: 'pointer',
})