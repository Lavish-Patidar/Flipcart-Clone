import { Box, Divider, Typography } from "@mui/material";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { DealBox, DealButton, DealText, ProductText, SliderBox, SliderImage, TimerBox } from "./ComHome";
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Slide = ({ products, title, timer }) => {
    const timerURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <Box variant='span'>
                {hours}:{minutes}:{seconds} left
            </Box>
        )
    }

    return (
        <SliderBox>
            <DealBox>
                <DealText>{title}</DealText>
                {timer &&
                    <TimerBox>
                        <img src={timerURL} alt="clockImg" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </TimerBox>
                }
                <DealButton variant="contained" color="primary">View All</DealButton>
            </DealBox>
            <Divider />
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-p"
                containerClass="carousel-container"
            >
                {
                    products.map(products => (
                        <Link to={`/product/${products.id}`} key={products.id} style={{ textDecoration: 'none' }}>
                            <Box textAlign='center' style={{ padding: '25px 15px' }} >
                                <SliderImage src={products.url} alt="product" />
                                <ProductText style={{ fontWeight: 600, color: '#212121' }}>{products.title.shortTitle}</ProductText>
                                <ProductText style={{ color: 'green' }}>{products.discount}</ProductText>
                                <ProductText style={{ color: '#212121', opacity: '0.6' }}>{products.tagline} </ProductText>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </SliderBox>
    )
}

export default Slide