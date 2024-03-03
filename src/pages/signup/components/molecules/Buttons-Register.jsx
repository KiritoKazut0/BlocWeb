import { Field } from "formik";
import { Button } from "../atoms/Button";
import { Button_Google } from "../atoms/Button-Google";

export function Buttons_Register() {
    return (
        <>
            <div className='checbox-field'>
                <label className='checkbox-label' htmlFor="checkbox"> Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad. </label>
                <div><Field type="checkbox" id="checkbox" name="checkbox" /></div>
            </div>
            <Button_Google/>
            <span> ¿Ya tienes una cuenta? <a href="#" className='negrita'>Inicia sesión aquí.</a> </span>
        </>
    )
}