import { ListItem } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { SearchBox, SearchIconBox, SearchInput, SearchList } from './ComHeader'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const Search = () => {

    const [text, setText] = useState('');
    const getText = (text) => {
        setText(text);
    }
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <SearchBox>
            <SearchInput placeholder='Search for products, brands and more' onChange={(e) => getText(e.target.value)} />
            <SearchIconBox>
                <SearchIcon />
            </SearchIconBox>

            {
                text &&
                <SearchList>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem key={product.id}>
                                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))

                    }
                </SearchList>
            }
        </SearchBox>
    )
}
export default Search
