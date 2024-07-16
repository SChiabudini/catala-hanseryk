import { useState, useEffect } from 'react';
import normal1 from './img/normal/1_normal.svg'
import normal2 from './img/normal/2_normal.svg'
import normal3 from './img/normal/3_normal.svg'
import normal4 from './img/normal/4_normal.svg'
import normal5 from './img/normal/5_normal.svg'
import selected1 from './img/selected/1_selected.svg'
import selected2 from './img/selected/2_selected.svg'
import selected3 from './img/selected/3_selected.svg'
import selected4 from './img/selected/4_selected.svg'
import selected5 from './img/selected/5_selected.svg'
import style from './Services.module.css';

const Services = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    const items = [
        {
            buttonImgNormal: normal1,
            buttonImgSelected: selected1,
            buttonText: "AMPAROS DE SALUD",
            content: `<p>
            Si ya te cansaste de reclamarle a tu Prepaga u Obra Social y continuas sin recibir una respuesta favorable, te ayudamos a que puedas solucionar este problema poniendo a tu salud y a la de tus seres queridos como la principal prioridad.<br/>
                Tramitamos tu AMPARO DE SALUD por:
                <ol>
                    <li>Rechazo de cobertura o demoras en autorizaciones.</li>
                    <li>Falta de entrega de medicación.</li>
                    <li>Demora, saturación o rechazo en las prestaciones asistenciales.</li>
                    <li>Incumplimientos en servicios médicos para personas con discapacidades.</li>
                    <li>Negativa de tratamientos médicos, cobertura de prótesis o cirugías.</li>
                    <li>Desafiliaciones compulsivas o arbitrarias en razón de embarazos o supuestas preexistencias.</li>
                    <li>¿Te jubilaste y querés derivar aportes o continuar con tu Prepaga sin pasarte a PAMI?</li>
                    <li>Cobertura de residencias y geriatricos para adultos mayores.</li>
                    <li>Cobertura para los tratamientos de fertilidad.</li>
                    <li>Cualquier conflicto que tengas con tu Prepaga u Obra Social en el que no estén escuchando ni haciendo lugar a tus reclamos.</li>
                </ol>
            </p>`
        },
        {
            buttonImgNormal: normal2,
            buttonImgSelected: selected2,
            buttonText: "DEFENSA DEL CONSUMIDOR",
            content: "2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed "
        },
        {
            buttonImgNormal: normal3,
            buttonImgSelected: selected3,
            buttonText: "ACCIDENTES DE TRABAJO",
            content: `<h3>¿Qué es un accidente de trabajo?</h3>
                <p>Los accidentes de trabajo son aquellos hechos súbitos y violentos que ocurren cuando el trabajador se encuentra realizando sus tareas habituales (denominados “en ocasión”) o los hechos que suceden entre el trayecto que va del lugar de trabajo al domicilio del trabajador - o al revés-, siendo estos denominados “in itinere”. En otras palabras, el accidente de trabajo es aquel hecho que afecta a tu salud física o mental que ocurre de forma inesperada, ocasionado durante las horas que te encontrás trabajando o en el trayecto de ida y vuelta a tu domicilio.</p>
                <h3>¿Qué puede ser considerado una enfermedad profesional?</h3>
                <p>Las enfermedades son aquellas producidas por la tarea desempeñada o a causa del lugar de trabajo. Existe un listado de enfermedades profesionales que las enumera y específica también los "factores de riesgo" -situaciones que pueden considerarse de riesgo o afectar al ser humano- como ventilación, manipulación de sustancias químicas, posición de trabajo, carga de trabajo, ruidos, etc. Las que no se encuentren listadas, deben ser denunciadas y tienen un procedimiento administrativo especial para su reconocimiento.</p>
                <p><b>En sintesis, las enfermedades profesionales son aquellas ocasionadas directamente por el trabajo que realiza una persona.</b></p> 
                <p>Nuestros servicios:
                    <ul>
                        <li>Analizamos tu caso y te asesoramos virtual o presencialmente, según tu necesidad.</li>
                        <li>Para el caso que la Aseguradora de Riesgos del Trabajo (ART) te esté brindando prestaciones deficientes y/o te haya dado el alta médica de forma prematura, te explicamos cómo proceder ante la Superintendencia de Riesgos del Trabajo y redactamos los telegramas laborales que necesites.</li>
                        <li>Si la ART te mandó una carta documento y rechazó total o parcialmente el siniestro (por accidente o enfermedad profesional), iniciamos los trámites necesarios para que te den prestaciones médicas y dinerarias.</li>
                        <li>Iniciamos y te acompañamos en el expediente administrativo ante la Comisión Médica de la Superintendencia de Riesgos del Trabajo y en el proceso judicial posterior -cuando sea necesario-.</li>
                </ul>
            </p>`
        },
        {
            buttonImgNormal: normal4,
            buttonImgSelected: selected4,
            buttonText: "GESTIÓN DE CIUDADANÍA",
            content: `<p>
                Nuestro sector de DERECHO INTERNACIONAL cuenta con sedes y corresponsales en Italia para la gestión administrativa y legal de Ciudadanía. 
                <ol>
                    <li>Realizamos asistencia presencial y consultas virtuales según tu necesidad.</li>

                    <li>Efectuamos búsqueda genealógica familiar: ¿Querés gestionar tu ciudadanía italiana y no sabes por dónde empezar?</li>

                    <li>Buscamos actas de nacimiento, matrimonio y defunción en todas las Comunas de Italia.</li>

                    <li>Realizamos búsqueda de actas parroquiales.</li>

                    <li>Armado y control de legajos y carpetas para su presentación en Argentina o Italia</li>

                    <li>Gestionamos tanto tus actas argentinas como aquellas expedidas en Latinoamérica</li>

                    <li>Realizamos asseverazione, traducciones y gestionamos visto consular</li>

                    <li>Apostillados simples y express urgentes</li>

                    <li>Búsquedas y certificaciones de Sentencias de naturalización, divorcio y adopción en toda la República Argentina</li>

                    <li>Te asistimos en la inscripción, actualización e inscripción de datos en Fast It | AIRE.</li>

                    <li>Rectificaciones judiciales y autos de identidad.</li>

                    <li>¿El apellido de tu avo fue modificado en el tiempo? No te preocupes, te asistimos y gestionamos la mejor solución para tu caso.</li>

                    <li>Asistencia para la homologación de Títulos y VISAS de trabajo.</li>
                </ol>
            </p><p>
                Somos un Estudio Ítalo-Argentino por lo que contamos con socios y corresponsales en Italia para tramitar tu ciudadanía por VÍA JUDICIAL 

                Gestionamos tu ciudadanía sin necesidad de que viajes a Italia y te asistimos para que puedas realizarlo para toda tu familia.

                <ul>
                    <li>JUICIOS POR FALTA DE TURNOS: ¿No conseguís turno en tu Consulado asignado? ¿Estás esperando hace años para gestionar tu ciudadanía? Tenemos una solución para ofrecerte.</li>


                    <li>JUICIOS VÍA MATERNA</li>
                </ul>
                Si no podes realizar la ciudadanía italiana por vía administrativa, te asesoramos en el armado de tu carpeta y trabajamos conjuntamente con nuestros socios en Roma para que realicen el proceso judicial. 

                Te acompañamos y asesoramos en todo el proceso hasta la obtención de tu pasaporte.


                También te brindamos ayuda para que puedas verificar el estado del expediente desde dónde estés a partir de la App  Giustizia Civile.
            </p>`
        },
        {
            buttonImgNormal: normal5,
            buttonImgSelected: selected5,
            buttonText: "PEQUEÑAS EMPRESAS",
            content: "5. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed "
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (

        <div>
            {isMobile ? (
                <div className={style.div}>
                    <div className={style.content}>
                        <div className={style.sidebar}>
                            {items.map((item, index) => (
                                <button
                                    key={index}
                                    className={`${style.menuItem} ${selectedItem === index ? style.active : ''}`}
                                    onClick={() => setSelectedItem(index)}
                                >
                                    <p><img src={`${selectedItem === index ? item.buttonImgSelected : item.buttonImgNormal}`} alt=""/></p>
                                </button>
                            ))}
                        </div>
                        <h2>{items[selectedItem].buttonText}</h2>
                        <div className={style.container}>
                            <div dangerouslySetInnerHTML={{ __html: items[selectedItem].content }}  className={style.containerDiv}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.div}>
                    <div className={style.content}>
                        <div className={style.sidebar}>
                            {items.map((item, index) => (
                                <button
                                    key={index}
                                    className={`${style.menuItem} ${selectedItem === index ? style.active : ''}`}
                                    onClick={() => setSelectedItem(index)}
                                >
                                    <p><img src={`${selectedItem === index ? item.buttonImgSelected : item.buttonImgNormal}`} alt=""/>{item.buttonText}</p>
                                </button>
                            ))}
                        </div>
                        <div className={style.container}>
                            <div dangerouslySetInnerHTML={{ __html: items[selectedItem].content }}  className={style.containerDiv}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;