import { Formik } from 'formik';
import { Form_Registro } from './components/organisms/Form-Registro';
import "./Registro.css"
import { Valores } from "./Datos/Datos.Valores";
import { Validaciones } from './Datos/Datos.Validaciones';
export function Registro(){
    return (
            <Formik  initialValues={Valores}
                validate={(v) => Validaciones(v)}
                onSubmit={({ resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
            }}>
                <Form_Registro/>
            </Formik>
    );
}
