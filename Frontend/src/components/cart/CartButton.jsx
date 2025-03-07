import { Box, Button, ButtonGroup, styled } from '@mui/material'
import React from 'react'


//Css HAndleing 
const ButtonComponent = styled(ButtonGroup)({
    marginTop: 30,
})
const StyledButton = styled(Button)({
    borderRadius: '50%',

})


const CartButton = () => {
    return (
        <ButtonComponent>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </ButtonComponent>
    )
}

export default CartButton;