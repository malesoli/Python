function validar() {
    var errores = "";
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() == "") {
        errores += "El nombre es obligatorio\n";
    }
    if (mail.trim() == "") {
        errores += "El mail es obligatorio\n";
    }
    if (mensaje.trim() == "") {
        errores += "El mensaje es obligatorio\n";
    }

    if (errores != "") {
        alert(errores);
        return false;
    }
}