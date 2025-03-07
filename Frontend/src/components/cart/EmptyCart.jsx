import { Box, styled, Typography } from '@mui/material';
import React from 'react'


//Handlin gcss 
const EmptyBox = styled(Box)({
    height: '65vh',
    width: '80%',
    background: '#fff',
    margin: '80px 140px',
})

const EmptyBoxContainer = styled(Box)({
    textAlign: 'center',
    paddingTop: 45,
});





const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
const EmptyCart = () => {
    return (
        <EmptyBox>
            <EmptyBoxContainer>
                <img src={imgurl} alt='EmptyImage' style={{ width: '30%', }} />
                <Typography>Your Cart is Empty</Typography>
                <Typography>Add items to it now</Typography>
            </EmptyBoxContainer>
        </EmptyBox>
    )
}

export default EmptyCart