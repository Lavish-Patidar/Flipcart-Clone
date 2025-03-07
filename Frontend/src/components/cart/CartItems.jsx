import { Box, Typography } from "@mui/material";
import { CartItemsContainer, LeftCartItemBox, RemoveCartItem, SellerText } from "./ComCart";
import { addEllipsis } from "../../utils/utils";
import CartButton from "./CartButton";
import { removeFromCart } from '../../redux/actions/cartAction';
import { useDispatch } from "react-redux";

const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


const CartItems = ({ item }) => {

    const dispatch = useDispatch();
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }


    return (
        <CartItemsContainer>
            <LeftCartItemBox>
                <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
                <CartButton onClick={() => onAddToCart(item.id, 1)} /> {/* Add to Cart button */}

            </LeftCartItemBox>


            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>


                <SellerText>
                    Seller:RetailNet{" "}
                    <Box component="span">
                        <img
                            src={fassured}
                            alt="FassuredImg"
                            style={{ width: 50, marginLeft: 10 }}
                        />
                    </Box>
                </SellerText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component='span' style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;


                    <Box component='span' style={{ color: '#878787' }}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;


                    <Box component='span' style={{ color: '#388E3C' }}>{item.price.discount}</Box>


                </Typography>

                <RemoveCartItem onClick={() => removeItemFromCart(item.id)}>Remove</RemoveCartItem>
            </Box>
        </CartItemsContainer>
    );
};

export default CartItems;
