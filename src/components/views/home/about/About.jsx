import React, { useEffect, useRef } from 'react';
import style from "./About.module.css";
import catala from "./img/catala.jpg";
import hanseryk from "./img/hanseryk.jpg";

const About = () => {
    const lineRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.animate);
                    observer.unobserve(entry.target); // Stop observing once the animation starts
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
    }, []);

    return (
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
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
