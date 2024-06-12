import { NavLink, useLocation } from "react-router-dom";
import style from './Nav.module.css';

const Nav = () => {
    const location = useLocation();

    return (
        <div className={style.div}>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/' ? style.selected : ''}`}
                to="/"
            >
                <span className={style.dot}>•</span> ‎ ‎Inicio‎ ‎ <span className={style.dot}>•</span>
            </NavLink>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/servicios' ? style.selected : ''}`}
                to="/servicios"
            >
                <span className={style.dot}>•</span> ‎ ‎Servicios‎ ‎ <span className={style.dot}>•</span>
            </NavLink>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/contacto' ? style.selected : ''}`}
                to="/contacto"
            >
                <span className={style.dot}>•</span> ‎ ‎Contacto‎ ‎ <span className={style.dot}>•</span>
            </NavLink>
        </div>
    );
}

export default Nav;