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
        { buttonImgNormal: normal1, buttonImgSelected: selected1, buttonText: "AMPAROS DE SALUD", content: "1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed  1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed" },
        { buttonImgNormal: normal2, buttonImgSelected: selected2, buttonText: "DEFENSA DEL CONSUMIDOR", content: "2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed " },
        { buttonImgNormal: normal3, buttonImgSelected: selected3, buttonText: "ACCIDENTES DE TRABAJO", content: "3. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed " },
        { buttonImgNormal: normal4, buttonImgSelected: selected4, buttonText: "GESTIÓN DE CIUDADANÍA", content: "4. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed " },
        { buttonImgNormal: normal5, buttonImgSelected: selected5, buttonText: "PEQUEÑAS EMPRESAS", content: "5. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed " }
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
                        <div className={style.container}>
                            <p className={style.selectedItemTitle}>{items[selectedItem].buttonText}</p>
                            <p>{items[selectedItem].content}</p>
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
                            <p>{items[selectedItem].content}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;