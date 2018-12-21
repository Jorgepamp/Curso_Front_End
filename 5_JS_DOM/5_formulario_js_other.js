/*ejercicio
- validar que el usuario introducza un email y contraseña. 
    - marcar en rojo los campos que no sean rellenados
-comprobar que sean iguales entre sí
    -marcar en verden cuando coincidan
    -marcar en naranja cuando no.
- Cuando esté todo correcto, indicar "registrado con éxito"

*/

//Ejercicio 1:

function validar() {
    var inputcorreo = document.getElementById("correo");
    var correo = inputcorreo.value;
    validateInput(inputcorreo, correo);

    var inputcorreo_rep = document.getElementById("correo_rep");
    var correo_rep = inputcorreo_rep.value;
    validateInput(inputcorreo_rep, correo_rep);

    var inputpassword = document.getElementById("password");
    var password = inputpassword.value;
    validateInput(inputpassword, password);

    var inputpassword_rep = document.getElementById("password_rep");
    var password_rep = inputpassword_rep.value;
    validateInput(inputpassword_rep, password_rep);

}

function validateInput(inputTexto, texto) {
    if (texto == "") {
        inputTexto.style.borderColor = "#F04040"
    } else {
        inputTexto.style.borderColor = "#319630"

    }
}

//Ejercicio 2

function validatecorreo(inputcorreo, correo, inputcorreo_rep, correo_rep) {
    if (correo === correo_rep) {
        inputcorreo.style.borderColor = "#F04040"
        inputcorreo_rep.style.borderColor = "#F04040"

    } else {
        inputcorreo.style.borderColor = "#319630"
        inputcorreo_rep.style.borderColor = "#319630"

    }

}