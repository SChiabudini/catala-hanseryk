import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import validation from './validation';
import style from './Form.module.css';

const Form = () => {

    const initialUserInput = {
        name: '',
        number: '',
        email: '',
        message: ''
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    const [touchedFields, setTouchedFields] = useState({
        name: false,
        number: false,
        email: false,
        message: false
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserInput((prevUserInput) => ({
            ...prevUserInput,
            [name]: value
        }));

        setTouchedFields((prevTouchedFields) => ({
            ...prevTouchedFields,
            [name]: true
        }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: touchedFields[name] ? validation(userInput)[name] : ''
        }));
    };

    const isFormValid = () => {
        const formErrors = validation(userInput);
        const isEmptyField = Object.values(userInput).some((value) => value === '');
        const hasError = Object.values(formErrors).some((error) => error !== '');
        return !isEmptyField && !hasError;
    };

    const [isSending, setIsSending] = useState(false);

    const sendEmail = () => {

        setIsSending(true);

        const serviceId = 'service_ybt047d';
        const templateId = 'template_1fc9abq';

        emailjs.send(serviceId, templateId, userInput).then(
            (response) => {
                console.log('Correo electrónico enviado con éxito:', response);
                setSuccessMessage(
                    'El mensaje ha sido enviado. En breve nos comunicaremos con usted.'
                );
                setUserInput(initialUserInput);
                setTouchedFields({
                    name: false,
                    number: false,
                    email: false,
                    message: false
                });
                setErrors({});
            },
            (error) => {
                console.error('Error al enviar el correo electrónico:', error);
            }
        ).finally(() => {
            setIsSending(false);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            console.log('Formulario válido:', userInput);
            sendEmail();
        } else {
            console.log('Formulario inválido');
        }
    };

    return (
        <div className={style.div}>
            <div className={style.content}>
            <h2>•‎ ‎ENVIANOS TU CONSULTA‎ ‎•</h2>
                <form onSubmit={handleSubmit}>
                    <p className={style.label}><label htmlFor="name">Nombre*</label></p>
                    <p className={style.input}><input
                        name="name"
                        type="text"
                        placeholder='Debe contener entre 3 y 30 caracteres'
                        value={userInput.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /></p>
                    {touchedFields.name && errors.name && <p className={style.error}>{errors.name}</p>}
                    <p className={style.label}><label htmlFor="number">Teléfono*</label></p>
                    <p className={style.input}><input
                        name="number"
                        type="text"
                        placeholder='Solo números, sin 0 y sin 15'
                        value={userInput.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /></p>
                    {touchedFields.number && errors.number && <p className={style.error}>{errors.number}</p>}
                    <p className={style.label}><label htmlFor="email">Email*</label></p>
                    <p className={style.input}><input
                        name="email"
                        type="email"
                        placeholder='tuemail@correo.com'
                        value={userInput.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /></p>
                    {touchedFields.email && errors.email && <p className={style.error}>{errors.email}</p>}
                    <p className={style.label}><label htmlFor="message">Mensaje*</label></p>
                    <p className={style.input}><textarea
                        name="message"
                        value={userInput.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea></p>
                    {touchedFields.message && errors.message && <p className={style.error}>{errors.message}</p>}
                    <div className={style.formButton}>
                        <button type="submit" disabled={!isFormValid() || isSending}>
                            {isSending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                    {successMessage && <p style={{ color: '#274a62', textAlign: 'center', fontSize: '0.75rem'}}>{successMessage}</p>}
                </form>
            </div>
        </div>
    )
}

export default Form;
