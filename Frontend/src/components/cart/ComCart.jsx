import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//main Cart css handle
export const MainGridContainer = styled(Grid)(({ theme }) => ({
    padding: '30px 120px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 10px',
    }
}))


export const CartHeaderBox = styled(Box)({
    padding: '15px 24px',
    background: '#fff',

});

export const CartButtonBox = styled(Box)({
    padding: '16px 22px',
    background: '#fff',
    boxShadow: ' 0 -2px 10px 0 rgb( 0 0 0 /10%)',
    borderTop: '1px solid #F0F0F0',
})

export const PlaceOrderButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    marginLeft: 'auto',
    background: '#fb641b',
    color: '#fff',
    width: 250,
    height: 51,
    borderRadius: '2px',
    [theme.breakpoints.down('md')]: {
        width: 200,
    },
    [theme.breakpoints.down('sm')]: {
        width: 150,

    }
}))

export const LeftCartComponent = styled(Grid)(({ theme }) => ({
    paddingRight: '20px',
    [theme.breakpoints.down('md')]: {
        marginBottom: 10,
        paddingRight: 0,
    }
}));



//Cart Items Css handling 

export const CartItemsContainer = styled(Box)({
    borderTop: '1px solid #f0f0f0',
    display: 'flex',
    background: '#fff',

})

export const LeftCartItemBox = styled(Box)({
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
})

export const SellerText = styled(Typography)({
    color: '#878787',
    fontSize: 14,
    marginTop: 14,
});

export const RemoveCartItem = styled(Button)({
    marginTop: "20px",
    fontSize: 16,
    color: '#000',
    fontWeight: 600,

});



//Accout not logined 
export const AccountNotLoggedIn = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '50%',
    height: '60vh',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '80px auto',
    border: '1px solid ',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
        height: '40vh',
    }
}));

export const AccountText = styled(Typography)(({ theme }) => ({

}));


//placeOrder css Handeler

export const PlaceOrderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60vh',
    width: '70%',
    margin: '80px auto',
    background: '#fff',
}))

export const PlaceOrderMainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',

}));

export const PlaceOrderLeftBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '58%',
    padding: '30px 40px',
}))