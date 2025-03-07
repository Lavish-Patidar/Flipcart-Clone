import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Grid, Typography } from '@mui/material';
import ActionItem from './ActionItem';
import { Component, ProductContainer, ProductRightBox } from './ComDetail';
import ProductDetail from './ProductDetail';

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && product.id !== id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product, loading]);



    return (


        <Component>
            {
                product && Object.keys(product).length &&
                <ProductContainer container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />

                    </Grid>

                    <ProductRightBox item lg={8} md={8} sm={8} xs={12}>

                        <ProductDetail product={product} />
                    </ProductRightBox>
                </ProductContainer>
            }
        </Component>

    )
}

export default DetailView