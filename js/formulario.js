const validarEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validar() {
    var errores = "";
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() == "") {
        errores += "El nombre es obligatorio\n";
    }
    if (mail.trim() == "") {
        errores += "El email es obligatorio\n";
    } else if (!validarEmail(mail.trim())) {
        errores += "El email no tiene un formato valido\n";
    }
    if (mensaje.trim() == "") {
        errores += "El mensaje es obligatorio\n";
    }

    if (errores != "") {
        alert(errores);
        return false;
    }
}