import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from "./nav/Nav";
import logoHeader from "./logo.svg";
import style from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let headerClass;
    if (location.pathname === "/") {
        headerClass = scrolled ? style.scrolledHome : style.home;
    } else if (location.pathname === "/servicios") {
        headerClass = style.services;
    } else if (location.pathname === "/contacto") {
        headerClass = style.contact;
    } else {
        headerClass = "";
    }

    return (
        <div className={`${style.div} ${headerClass}`}>
            <div className={style.content}>
                <NavLink to="/">
                    <h1>
                        <img src={logoHeader} alt="Catalá Hanserik - Logo" title="Catalá Hanserik - Abogadas"/>
                    </h1>
                </NavLink>
                <div className={style.nav}><Nav/></div>
            </div>
        </div>
    );
}

export default Header;
