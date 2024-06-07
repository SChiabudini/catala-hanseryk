import HomeCarousel from "./carousel/Carousel";
import About from "./about/About";
import ServicesHome from "./servicesHome/ServicesHome";

const Home = () => {

    return (
        <div>
            <HomeCarousel/>
            <About/>
            <ServicesHome/>
        </div>
    );
}

export default Home;