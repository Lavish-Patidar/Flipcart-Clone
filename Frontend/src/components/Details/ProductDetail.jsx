import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { LocalOffer as Badge } from '@mui/icons-material';


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
    font-size:14px;
    margin-top: 10px;
    }
    `
const StyledBadge = styled(Badge)`
margin-right:10px;
color: #00CC00;
font-size: 15px;

`

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
margin-top:10px;
& > td{
font-size:14px;
border:none;
}
`




const ProductDetail = ({ product }) => {
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 Ratings & 1 Reviews
                <Box component='span'> <img src={fassured} alt="imag" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>&nbsp;
            </Typography>
            <Typography > Avalable Offers</Typography>
            <SmallText>
                <Typography><StyledBadge /> Get extra 20% off upto ₹200 on first order T&C</Typography>
                <Typography><StyledBadge /> Get extra 13% off price inclusive of discount T&C</Typography>
                <Typography><StyledBadge /> Sign up  for ShopNow Play later ShopNow Gift Card with purchase of ₹ 5000</Typography>
                <Typography><StyledBadge /> Bank Offer10% off up to ₹1,250 on Flipkart Axis Bank Credit Card EMI Txns, on orders of ₹7,499 and aboveT&C</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}> Delivery by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell > NO Warranty </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell >
                            <Box component='span' style={{ color: '#2874f0' }}>
                                SuperComNet
                            </Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography> View More Sellers starting at ₹{product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2} > <img src={adURL} alt='SuperCoinImg' style={{ width: 390 }} /></TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Discription</TableCell>
                        <TableCell > {product.description} </TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail