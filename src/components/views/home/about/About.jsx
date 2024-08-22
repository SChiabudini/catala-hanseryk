import React, { useState, useEffect, useRef } from 'react';
import style from "./About.module.css";
import catala from "./img/catala.jpg";
import hanseryk from "./img/hanseryk.jpg";

const About = () => {
    const lineRefs = [useRef(null), useRef(null), useRef(null)];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.animate);
                    observer.unobserve(entry.target);
                }
            });
        });

        lineRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            lineRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    });

    return (
        <div>
            {isMobile ? (
                <div className={style.div}>
                    <div className={style.content}>
                    <div className={style.title}>
                        <div className={style.line1}></div>
                        <h2>NOSOTRAS</h2>
                        <div className={style.line} ref={lineRefs[0]}></div>
                    </div>
                    <section className={style.catala}>
                        <div className={style.profileImg}><img src={catala} alt="Samanta Catalá"/></div>
                        <h3>SAMANTA CATALÁ</h3>
                        <p>Abogada egresada de la Universidad de Buenos Aires con una gran formación académica y destacada trayectoria en el ámbito del Derecho Privado, Internacional Privado y del Consumo. Su enfoque práctico y capacidad para construir relaciones sólidas con sus clientes le han permitido brindar un servicio integral con soluciones innovadoras y eficientes.</p>
                    </section>
                    <section className={style.hanseryk}>
                        <div className={style.profileImg}><img src={hanseryk} alt="Cecilia Hanseryk"/></div>
                        <h3>CECILIA HANSERYK</h3>
                        <p>Abogada egresada de la Universidad de Buenos Aires con una sólida trayectoria de más de 15 años, especializada en Derecho Civil y del Trabajo. Su amplia experiencia abarca tanto el sector público como el privado, donde ha representado los intereses de una diversa clientela, desde trabajadores hasta grandes corporaciones. Su profundo conocimiento del sistema legal argentino le permite ofrecer soluciones personalizadas y efectivas a cada caso.</p>
                    </section>
                    </div>
                </div>
            ) : (
                <div className={style.div}>
                    <section className={style.catala}>
                        <div className={style.content}>
                            <div className={style.title}>
                                <div className={style.line1}></div>
                                <h2>NOSOTRAS</h2>
                                <div className={style.line} ref={lineRefs[0]}></div>
                            </div>
                            <div className={style.withMargin}>
                                <div className={style.profileImg}><img src={catala} alt="Samanta Catalá"/></div>
                                <h3>SAMANTA CATALÁ</h3>
                                <p>Abogada egresada de la Universidad de Buenos Aires con una gran formación académica y destacada trayectoria en el ámbito del Derecho Privado, Internacional Privado y del Consumo. Su enfoque práctico y capacidad para construir relaciones sólidas con sus clientes le han permitido brindar un servicio integral con soluciones innovadoras y eficientes.</p>
                            </div>
                        </div>
                    </section>
                    <section className={style.hanseryk}>
                        <div className={style.content}>
                            <div className={style.title}>
                                <div className={style.line} ref={lineRefs[1]}></div>
                            </div>
                            <div className={style.withMargin}>
                                <div className={style.profileImg}><img src={hanseryk} alt="Cecilia Hanseryk"/></div>
                                <h3>CECILIA HANSERYK</h3>
                                <p>Abogada egresada de la Universidad de Buenos Aires con una sólida trayectoria de más de 15 años, especializada en Derecho Civil y del Trabajo. Su amplia experiencia abarca tanto el sector público como el privado, donde ha representado los intereses de una diversa clientela, desde trabajadores hasta grandes corporaciones. Su profundo conocimiento del sistema legal argentino le permite ofrecer soluciones personalizadas y efectivas a cada caso.</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default About;
