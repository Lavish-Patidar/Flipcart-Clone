import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cartAction';

const MenuBox = styled(Menu)({
    marginTop: '5px',
})

const Logout = styled(Typography)({
    fontSize: '14px',
    marginLeft: '10px',
})

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false)
    }
    const UserLogout = () => {
        dispatch(clearCart());
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2, marginRight: 15, cursor: 'pointer' }} >{account}</Typography></Box>
            <MenuBox
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(), UserLogout() }}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </MenuBox>
        </>
    )
}

export default Profile;