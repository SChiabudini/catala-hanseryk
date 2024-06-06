import style from './Info.module.css';
import email from './img/email.svg';
import adress from './img/adress.svg';
import instagram from './img/instagram.svg';
import whatsapp from './img/whatsapp.svg';

const Info = () => {
    return(
        <div className={style.div}>
            <h2>•‎ ‎OTROS MEDIOS DE CONTACTO‎ ‎•</h2>
            <div className={style.content}>
                <div className={style.methods}>
                    <div className={style.method}>
                        <img src={email} alt=""/>
                        <h3>CORREO</h3>
                        <p><a href="mailto:catalahanseryk@gmail.com" target="_blank" rel="noopener noreferrer">catalahanseryk@gmail.com</a></p>
                    </div>
                    <div className={style.method}>
                        <img src={adress} alt=""/>
                        <h3>UBICACIÓN</h3>
                        <p><a href="https://maps.app.goo.gl/FSziRstVoScLMw7G9" target="_blank" rel="noopener noreferrer">Belgrano, CABA</a></p>
                    </div>
                    <div className={style.method}>
                        <img src={instagram} alt=""/>
                        <h3>INSTAGRAM</h3>
                        <p><a href="" target="_blank" rel="noopener noreferrer">/catalahanseryk</a></p>
                    </div>
                    <div className={style.method}>
                        <img src={whatsapp} alt=""/>
                        <h3>WHATSAPP</h3>
                        <p><a href="https://wa.me/" target="_blank" rel="noopener noreferrer">(11) 2346 - 8459</a></p>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Info;