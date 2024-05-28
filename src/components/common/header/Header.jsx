import Nav from "./nav/Nav";
import logoHeader from "./logo.svg";
import style from "./Header.module.css"
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    let headerClass;
    if (location.pathname === "/") {
        headerClass = style.home;
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
                <h1><img src={logoHeader} alt="Catalá Hanserik - Logo" title="Catalá Hanserik - Abogadas"/></h1>
                <div className={style.nav}><Nav/></div>
            </div>
        </div>
    );
}

export default Header;