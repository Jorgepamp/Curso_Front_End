function firstUpper(text) {
    var firstLetter = text.charAt(0).toUpperCase();
    var rest = text.substring(1).toLowerCase();
    return firstLetter + rest;

}

/*function validar() {
    var inputname = document.getElementById("name");
    var inputLastName = document.getElementById("Apellido");

    var nombre = inputname.value;
    var apellido = inputLastName.value;

    if (nombre == "") {
        inputname.style.borderColor = "#F04040"
    } else {
        inputname.style.borderColor = "#319630"
        inputname.value = firstUpper(nombre)
    }
    if (apellido == "") {
        inputLastName.style.borderColor = "#F04040"
    } else {
        inputLastName.style.borderColor = "#319630"
        inputLastName.value = firstUpper(apellido)
    }
}*/

function validar() {
    var inputname = document.getElementById("name");
    var nombre = inputname.value;

    validateInput(inputname, nombre);

    var inputLastName = document.getElementById("Apellido");
    var apellido = inputLastName.value;
    validateInput(inputLastName, apellido);
}

function validateInput(inputTexto, texto) {
    if (texto == "") {
        inputTexto.style.borderColor = "#F04040"
    } else {
        inputTexto.style.borderColor = "#319630"
        inputTexto.value = firstUpper(texto)
    }
}