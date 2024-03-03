export function Validaciones(valores){
    let errores = {};
    // Validacion nombre
    if (!valores.nombre) {
        errores.nombre = 'Por favor ingresa un nombre'
    }
    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        errores.nombre = 'El nombre solo puede contener letras y espacios'
    }
    if (!valores.apellido) {
        errores.apellido = 'Por favor ingresa un apellido'
    }
    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
        errores.apellido = 'El nombre solo puede contener letras y espacios'
    }
    if (!valores.correo) {
        errores.correo = 'Por favor ingresa un correo electronico'
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
        errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
    }
    if (!valores.contraseña) {
        errores.contraseña = 'Por favor ingresa una contraseña'
    }
    if (valores.contraseña !== valores.contraseñaConfirmacion) {
        errores.contraseñaConfirmacion = 'La contraseña debe ser igual'
    }
    return errores;
}