import { Box, Drawer, List, ListItem, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {
    MainButtonBox,
    MenuIconButton,
    StyledAppbar,
    StyledBox,
    StyledTypography,
} from "./ComHeader";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import ShopNow from "../../constant/ShopNow.png";
import { useState } from "react";




const Header = () => {
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const list = () => (
        <Box style={{}} onClick={handleDrawerClose}>
            <List>
                <ListItem button >
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );


    return (
        <StyledAppbar>
            <Toolbar style={{ minHeight: 55 }}>


                <StyledBox to="/">
                    <img src={ShopNow} alt="" style={{ width: 75 }} />
                    <Box>
                        <StyledTypography>
                            Explore&nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>
                                Plus
                            </Box>
                        </StyledTypography>
                    </Box>

                </StyledBox>

                <Search />

                <MenuIconButton onClick={handleDrawerOpen} >
                    <MenuIcon />
                </MenuIconButton>

                <Drawer open={open} onClose={handleDrawerClose} >
                    {list()}
                </Drawer>

                <MainButtonBox>
                    <CustomButtons />
                </MainButtonBox>


            </Toolbar>
        </StyledAppbar >
    );
};
export default Header;
