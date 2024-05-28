import style from "./Footer.module.css";
import adress from "./img/adress.svg";
import email from "./img/email.svg";
import whatsapp from "./img/whatsapp.svg";
import instagram from "./img/instagram.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();

    return (
        <div className={`${style.div} ${location.pathname === '/servicios' ? style.fixed : ''}`}>
            <div className={style.content}>
                <div className={style.location}>
                    <p><img src={adress} alt=""/><a href="https://maps.app.goo.gl/FSziRstVoScLMw7G9" target="_blank">Belgrano, Ciudad Autónoma de Buenos Aires</a></p>
                </div>
                <div className={style.social}>
                    <a href=""><img src={email} alt=""/></a>
                    <a href=""><img src={whatsapp} alt=""/></a>
                    <a href=""><img src={instagram} alt=""/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;