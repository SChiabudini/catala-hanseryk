import style from "./ServicesHome.module.css"
import normal1 from '../../services/img/normal/1_normal.svg'
import normal2 from '../../services/img/normal/2_normal.svg'
import normal3 from '../../services/img/normal/3_normal.svg'
import normal4 from '../../services/img/normal/4_normal.svg'
import normal5 from '../../services/img/normal/5_normal.svg'

const ServicesHome = () => {

    return (
        <div className={style.div}>
            <div className={style.content}>
                <section className={style.title}><h2>SERVICIOS</h2></section>
                <section className={style.service}>
                    <img src={normal1} alt=""/>
                    <h3>AMPAROS DE SALUD</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </section>
                <section className={style.service}>
                    <img src={normal2} alt=""/>
                    <h3>DEFENSA DEL CONSUMIDOR</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </section>
                <section className={style.service}>
                    <img src={normal3} alt=""/>
                    <h3>ACCIDENTES DE TRABAJO</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </section>
                <section className={style.service}>
                    <img src={normal4} alt=""/>
                    <h3>GESTIÓN DE CIUDADANÍA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p></section>
                <section className={style.service}>
                    <img src={normal5} alt=""/>
                    <h3>PEQUEÑAS EMPRESAS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                </section>
            </div>
        </div>
    );
}

export default ServicesHome;