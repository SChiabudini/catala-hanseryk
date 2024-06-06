import style from "./Contact.module.css"
import Info from "./info/Info.jsx";
import Form from "./form/Form.jsx";

const Contact = () => {

    return (
        <div className={style.div}>
            <div className={style.content}>
                <section>
                    <Form/>
                </section>
                <section>
                    <Info/>
                </section>
            </div>
        </div>
    );
}

export default Contact;