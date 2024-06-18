import { useState, useEffect } from "react";
import style from "./Carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeCarousel = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            {isMobile ? (
                <div className={style.div}>
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={5000} transitionTime={1000} onChange={handleChange}>
                        <div className={`${style.banner1} ${activeIndex === 0 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    <div className={style.elements}>
                                        <div className={style.lines}>
                                            <div className={style.horizontal}></div>
                                            <div className={style.vertical}></div>
                                        </div>
                                        <div className={style.text}>
                                            <p className={style.title}>Gestión de<br />ciudadanía italiana</p>
                                            <p className={style.resume}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.banner2} ${activeIndex === 1 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    1
                                </div>
                            </div>
                        </div>
                        <div className={`${style.banner3} ${activeIndex === 2 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    1
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            ) : (
                <div className={style.div}>
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000} onChange={handleChange}>
                        <div className={`${style.banner1} ${activeIndex === 0 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    <div className={style.elements}>
                                        <div className={style.lines}>
                                            <div className={style.horizontal}></div>
                                            <div className={style.vertical}></div>
                                        </div>
                                        <div className={style.text}>
                                            <p className={style.title}>Gestión de<br />ciudadanía italiana</p>
                                            <p className={style.resume}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.banner2} ${activeIndex === 1 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    <div className={style.elements}>
                                        <div className={style.text}>
                                            <p className={style.title}>Asistencia, asesoría<br />y amparos</p>
                                            <p className={style.resume}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                        </div>
                                        <div className={style.lines}>
                                            <div className={style.space}></div>
                                            <div className={style.vertical}></div>
                                            <div className={style.horizontal}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.banner3} ${activeIndex === 2 ? style.active : ''}`}>
                            <div className={style.transparency}>
                                <div className={style.content}>
                                    <div className={style.elements}>
                                        <div className={style.lines}>
                                            <div className={style.horizontal}></div>
                                            <div className={style.vertical}></div>
                                        </div>
                                        <div className={style.text}>
                                            <p className={style.title}>Pequeñas empresas<br />y freelancers</p>
                                            <p className={style.resume}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default HomeCarousel;
