import style from "./Carousel.module.css"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeCarousel = () => {

    return (
        <div className={style.div}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={5000} transitionTime={1000}>
                <div className={style.banner1}>
                    <div className={style.transparency}>
                        <div className={style.content}>
                            <div className={style.elements}>
                                <div className={style.lines}>
                                    <div className={style.horizontal}></div>
                                    <div className={style.vertical}></div>
                                </div>
                                <div className={style.text}>
                                    <p className={style.title}>Gestión de<br/>ciudadanía italiana</p>
                                    <p className={style.resume}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.banner2}>
                    <div className={style.transparency}>
                        <div className={style.content}>
                            1
                        </div>
                    </div>
                </div>
                <div className={style.banner3}>
                    <div className={style.transparency}>
                        <div className={style.content}>
                            1
                        </div>  
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;