import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegisterPerfil from '../../Information/PerfilRegister';
import Button from '../../Components/Atoms/Button';
import Img from '../../Components/Atoms/Img';
import Parrafo from '../../Components/Atoms/Parrafos';
import MessageError from '../../Components/Atoms/MessageError';
import './Registro.css';

const RegistroDos = () => {
    const [SuccessMessage, setSuccessMessage] = useState(false);
    return (
        <div className='container'>
            <Formik //este es el bloque para manejar el estado y la logica del formulario

                initialValues={{ // es Un objeto que contiene los valores iniciales para los campos del formulario.
                    carrera: "",
                    id_Estudiante: 0,
                    telefono: 0
                }}

                validate={(valores) => {  //validate es Una función que se ejecuta para validar los valores del formulario.
                    //arreglo de 
                    let errores = {}; //se utiliza para almacenar los mensajes de error 

                    // Validacion nombre
                    if (!valores.carrera) {
                        errores.carrera = 'Por favor ingresa una carrera.'
                    }
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.carrera)) {
                        errores.carrera = 'Solo puede contener letras y espacios.'
                    }

                    //validacion de apellido
                    if (!valores.id_Estudiante) {
                        errores.id_Estudiante = 'Por favor ingresa una id de estudiante.'
                    }
                    else if (!/^[a-zA-Z0-9]+$/.test(valores.id_Estudiante)) {
                        errores.id_Estudiante = 'Solo se permiten caracteres alfanuméricos.'
                    }


                    // Validacion correo
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor ingresa un numero telefonico'
                    } else if (valores.telefono.length < 10) {
                        errores.telefono = 'El numero telefonico debe tener almenos 10 digitos'
                    } else if (!/^(?:\d{1,3}|\d{1,4}|\d{1,5})\s?(?:\d{1,})$/.test(valores.telefono)) {
                        errores.telefono = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
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
                            <Parrafo>Completa tu perfil</Parrafo>
                            <Parrafo>¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor con la comunidad.</Parrafo>
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
                        <div className='container-inputs'>
                            <div className='field'>
                                <label htmlFor="intereses"> Intereses </label>
                                <div className='InteresesInputs'>
                                    <button>Materias</button>
                                    <button>Deportes</button>
                                    <button>Comida</button>
                                    <button>Hobbies</button>
                                    <button>Peliculas/Series</button>
                                </div>

                                <ErrorMessage name="intereses" component={() => (<MessageError message={errors["intereses"]} />)} />
                            </div>
                            <div className='field'>
                                <label htmlFor="redes">Redes sociales</label>
                                <div className='Redes'>
                                    <div className='IconoInput'>
                                        <img src="src/assets/multimedia/img/Instagram (icon — Colour).svg" alt="Instagram" />
                                        <input placeholder='@tucuenta' type="text" />
                                    </div>

                                    <div className='IconoInput'>
                                        <img src="src/assets/multimedia/img/Facebook (icon — Colour).svg" alt="Instagram" />
                                        <input placeholder='@tucuenta' type="text" />
                                    </div>

                                    <div className='IconoInput'>
                                        <img src="src/assets/multimedia/img/Layer 1.svg" alt="Instagram" />
                                        <input placeholder='@tucuenta' type="text" />
                                    </div>
                                </div>
                                <div className='field'>
                                    <label htmlFor="acercaDeMi">Acerca de mí</label>
                                    <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder='[Campo para compartir una breve descripción sobre ti]'>

                                    </textarea>
                                </div>
                                <div className='field dotted'>
                                    <button>
                                        <img src="src/assets/multimedia/img/Male User.svg" alt="icon " />
                                    </button>
                                    <div >
                                        <label htmlFor="archivo">Selecionar archivo</label>
                                        <div className='uploadFile'>
                                            <label htmlFor="archivo">Selecionar archivo</label>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="field">
                                    <label htmlFor="datos_Ubicacion">Datos de Ubicación</label>
                                    <div className='datos1'>
                                        <div>
                                            <label htmlFor="calle">Calle</label>
                                            <input type="text" placeholder='Calle Cárcamos' />
                                        </div>
                                        <div>
                                            <label htmlFor="no_interior">No. Int.</label>
                                            <input type="text" placeholder='123' />
                                        </div>
                                    </div>
                                    
                                    <div className='datos1'>
                                        <div>
                                            <label htmlFor="colonia">Colonia</label>
                                            <input type="text" placeholder='Arbide' />
                                        </div>
                                        <div>
                                            <label htmlFor="no_interior">C. P.</label>
                                            <input type="text" placeholder='12345' />
                                        </div>
                                    </div>

                                    <div className='datos1'>
                                        <div>
                                            <label htmlFor="estado">Estado</label>
                                            <input type="text" placeholder='Chiapas' />
                                        </div>
                                        <div>
                                            <label htmlFor="país">País</label>
                                            <input type="text" placeholder='México' />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <Button>Guardar cambios</Button>
                    </Form>

                )}


            </Formik>
        </div>
    );
}



export default RegistroDos;
