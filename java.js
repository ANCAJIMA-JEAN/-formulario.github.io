alert("Bienvenido precione ACEPTAR para rellenar el formulario");

function validar() {
    var ok = true;

    if (document.getElementById("nombre").value == "" || document.getElementById("correo").value == "" || document.getElementById("password").value == "") {
        alert("Introduzca todos los datos");
        ok = false;
    }

    return ok;
}