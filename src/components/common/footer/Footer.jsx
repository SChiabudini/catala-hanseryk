import { useState } from 'react';
import style from './Footer.module.css';
import adress from './img/adress.svg';
import email from './img/normal/email.svg';
import whatsapp from './img/normal/whatsapp.svg';
import instagram from './img/normal/instagram.svg';
import emailHover from './img/hover/email.svg';
import whatsappHover from './img/hover/whatsapp.svg';
import instagramHover from './img/hover/instagram.svg';

const Footer = () => {
    const [emailSrc, setEmailSrc] = useState(email);
    const [whatsappSrc, setWhatsappSrc] = useState(whatsapp);
    const [instagramSrc, setInstagramSrc] = useState(instagram);

    return (
        <div className={style.div}>
            <div className={style.content}>
                <div className={style.location}>
                    <p>
                        <img src={adress} alt="direccion"/>
                        <a href="https://maps.app.goo.gl/FSziRstVoScLMw7G9" target="_blank" rel="noopener noreferrer">
                            Belgrano, Ciudad Autónoma de Buenos Aires
                        </a>
                    </p>
                </div>
                <div className={style.social}>
                    <a href="" target='_blank'
                       onMouseEnter={() => setEmailSrc(emailHover)}
                       onMouseLeave={() => setEmailSrc(email)}>
                        <img src={emailSrc} alt="email"/>
                    </a>
                    <a href="" target='_blank'
                       onMouseEnter={() => setWhatsappSrc(whatsappHover)}
                       onMouseLeave={() => setWhatsappSrc(whatsapp)}>
                        <img src={whatsappSrc} alt="whatsapp"/>
                    </a>
                    <a href="" target='_blank'
                       onMouseEnter={() => setInstagramSrc(instagramHover)}
                       onMouseLeave={() => setInstagramSrc(instagram)}>
                        <img src={instagramSrc} alt="instagram"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
