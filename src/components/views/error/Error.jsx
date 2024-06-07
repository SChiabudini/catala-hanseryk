import { NavLink } from 'react-router-dom';
import style from './Error.module.css';

const Error = () => {
    return(
        <div className={style.div}>
            <p>ERROR 404</p>
            <p className={style.second}>Página no encontrada</p>
            <NavLink to="/">Volver</NavLink>
        </div>
    );
}

export default Error