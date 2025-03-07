import { Box, Grid, styled } from "@mui/material";



export const Component = styled(Box)({
    background: '#F2F2F2',
    marginTop: 55,

});

export const ProductContainer = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0,
    }

}))

export const ProductRightBox = styled(Grid)({
    marginTop: '50px',
})