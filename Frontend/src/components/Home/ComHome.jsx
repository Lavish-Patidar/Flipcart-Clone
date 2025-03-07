import { Box, Button, styled, Typography } from "@mui/material";


// Home / main Page css Handeler
export const HomeContainer = styled(Box)({
  padding: "20px 10px",
  background: '#F2F2F2',

})


//Navbar on the Home page
export const NavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '55px 130px 0 130px',
  justifyContent: 'space-between',
  overflow: 'overlay',
  [theme.breakpoints.down('lg')]: {
    margin: '0px 3px ',
  }
}))

export const NavItemBox = styled(Box)`
  padding: 12px 8px;
  text-align: center;]
  cursor: pointer;
}
`;

export const NavItemText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inharite;
`;


// Banner Css Handeler
export const BannerImag = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 180
  }
}))




//Slider css Handear

export const SliderBox = styled(Box)({
  marginTop: 10,
  background: "#ffffff",

});

export const DealBox = styled(Box)({
  padding: '15px 20px',
  display: 'flex',

})

export const TimerBox = styled(Box)({
  display: 'flex',
  marginLeft: 10,
  alignItems: "center",
  color: '#7f7f7f'
})
export const DealText = styled(Typography)({
  fontSize: 22,
  fontWeight: '600',
  marginRight: 25,
  lineHeight: '32px',
})

export const DealButton = styled(Button)({
  marginLeft: 'auto',
  backgroundColor: '#2847f0',
  borderRadius: '2px',
  fontSize: '13px',
  fontWeight: '600',
});

export const SliderImage = styled('img')({
  width: 'auto',
  height: '150px',

})

export const ProductText = styled(Typography)({
  fontSize: '14px,',
  marginTop: 5,

})