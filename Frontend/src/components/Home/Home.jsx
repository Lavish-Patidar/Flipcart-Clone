import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

//components
import Banner from "./Banner"
import { HomeContainer } from "./ComHome"
import Navbar from "./Navbar"
import { getProducts } from "../../redux/actions/productAction"
import Slide from "./Slide"
import MidSlider from "./MidSlider"
import MidSections from "./MidSections"

const Home = () => {
    const { products } = useSelector(state => state.getProducts);//useSelector hook to get the state from the store


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <Navbar />
            <HomeContainer>
                <Banner />
                <MidSlider products={products} title="Deal of the day" timer={true} />
                <MidSections />
                <Slide products={products} title="Discounts For You" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommented Items" timer={false} />
            </HomeContainer>
        </>
    )
}

export default Home