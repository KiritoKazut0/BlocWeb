import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegisterPerfil from '../../Information/RegisterInputs';
import Button from '../Atoms/Button';
import Span from '../Atoms/Span';
import Img from '../Atoms/Img';
import Parrafo from '../Atoms/Parrafos';
import MessageError from '../Atoms/MessageError';
import '../Organisms/Registro.css'
import IconGoogle from '../Atoms/IconGoogle';
const Registro = () => {
    const [SuccessMessage, setSuccessMessage] = useState(false);
    return (
        <div className='container'>
            <Formik //este es el bloque para manejar el estado y la logica del formulario

                initialValues={{ // es Un objeto que contiene los valores iniciales para los campos del formulario.
                    nombre: "",
                    apellido: "",
                    correo: "",
                    contraseña: "",
                    contraseñaConfirmacion: ""
                }}

                validate={(valores) => {  //validate es Una función que se ejecuta para validar los valores del formulario.
                    //arreglo de 
                    let errores = {}; //se utiliza para almacenar los mensajes de error 

                    // Validacion nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa un nombre'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    //validacion de apellido
                    if (!valores.apellido) {
                        errores.apellido = 'Por favor ingresa un apellido'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                        errores.apellido = 'El nombre solo puede contener letras y espacios'
                    }


                    // Validacion correo
                    if (!valores.correo) {
                        errores.correo = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    //validacion de contraseña
                    if (!valores.contraseña) {
                        errores.contraseña = 'Por favor ingresa una contraseña'
                    }


                    // verificamos si la contraseña es igual con el de la confirmacion 
                    if (valores.contraseña !== valores.contraseñaConfirmacion) {
                        errores.contraseñaConfirmacion = 'La contraseña debe ser igual'
                    }

                    return errores;
                }}

                onSubmit={({ resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');

                }}
            >
                {({ errors }) => (

                    <Form className="formulario">
                        <div className='container-header'>
                            <Img src='https://i.imgur.com/EdH0Gr8.png'></Img>
                            <Parrafo>Únete a nuestra comunidad estudiantil</Parrafo>
                            <Parrafo>Bienvenido a nuestra red social estudiantil. Regístrate ahora para conectarte con compañeros, acceder a recursos educativos
                                y participar en eventos emocionantes.</Parrafo>
                        </div>

                        <div className='container-inputs'>
                            {RegisterPerfil.fields.map((date, index) => {

                                return (

                                    <div key={index} className='field'>
                                        <label htmlFor={date.name}> {date.input} </label>
                                        <Field
                                            type={date.type}
                                            id={date.name}
                                            name={date.name}
                                            placeholder={date.placeholder}
                                        />

                                        <ErrorMessage name={date.name} component={() => (<MessageError message={errors[date.name]} />)} />

                                    </div>

                                )
                            })
                            }
                        </div>

                        <div className='checbox-field'>
                            <label className='checkbox-label' htmlFor="checkbox"> Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad. </label>
                            <div><Field type="checkbox" id="checkbox" name="checkbox"  /></div>
                        </div>

                        <Button> <IconGoogle />Registrarme con Google</Button>
                        <Span> ¿Ya tienes una cuenta? <a href="#" className='negrita'>Inicia sesión aquí.</a> </Span>
                    </Form>

                )}


            </Formik>
        </div>
    );
}



export default Registro;
