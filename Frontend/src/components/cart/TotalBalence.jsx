import { Box, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react';




//css handleing 
const Header = styled(Box)({
    padding: '15px 24px',
    background: '#fff',
    borderBottom: '1px solid #f0f0f0',
});

const Heading = styled(Typography)({
    color: '#878787',
});

const Container = styled(Box)({
    padding: "15px 24px",
    background: '#fff',
    '& > p': {
        marginBottom: '20px',
        fontSize: 14,
    },
    '& > h6': {
        marginBottom: '20px',
    }
});

const PriceBox = styled(Box)({
    float: 'right',
});

const Discount = styled(Typography)({
    color: 'green',
    fontWeight: 500,
})


const TotalBalence = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    };

    useEffect(() => {
        totalAmount();
    }, [cartItems])

    return (
        <Box>
            <Header>
                <Heading>Price Details</Heading>
            </Header>
            <Container>
                <Typography>Price({cartItems?.length} items)
                    <PriceBox component='span'>₹{price} </PriceBox>
                </Typography>
                <Typography>Discount
                    <PriceBox style={{}} component='span'>-₹{discount} </PriceBox>
                </Typography>
                <Typography>Dilivery Charges
                    <PriceBox component='span'>₹{cartItems?.length ? 40 : 0} </PriceBox>
                </Typography>
                <Typography variant='h6'> Total Amount
                    <PriceBox component='span'>₹{cartItems?.length ? price - discount + 40 : 0} </PriceBox>
                </Typography>

                <Discount>
                    {cartItems?.length ? ` You Will save ₹${discount - 40} on this order` : ''}
                </Discount>
            </Container>
        </Box>
    )
}

export default TotalBalence