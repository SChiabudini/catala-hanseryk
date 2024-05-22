import Carousel from "./carousel/Carousel";
import About from "./about/About";
import ServicesHome from "./servicesHome/ServicesHome";

const Home = () => {

    return (
        <div>
            <Carousel/>
            <About/>
            <ServicesHome/>
        </div>
    );
}

export default Home;