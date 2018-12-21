/*1-Crear una función elementById(id) que devuelva un elemento por su id
 2- Crear una función cambiaAtributoPorId(id, atributo, valor) que modifique el atributo de un elemento buscado por su id
 3- crear una función adjuntarElementoPorId(id, etiqueta) que genere un elemento tipo "etiqueta" y lo adjunte a un elemento encontrado por Id*/


//Ejercicio1:
function generate() {
    getElementById("div_form").style.backgroundColor = "#86afd4"; // esto es  ejercicio 1.


}

function getElementById(id) {
    return document.getElementById(id);
}

//Ejercicio2:

function generate() {
    changeAtributteById("div_form", "style", "background-color: #86d497; width:400px"); //esto es  ejercicio 2.
    // addElementById("div_form", "input")
    //addElementById("div_form", "br")
    // addElementById("div_form", "input")
}

function changeAtributteById(id, atributo, valor) {
    getElementById(id).setAttribute(atributo, valor);
}

//Ejercicio3:

function addElementById(id, label) {
    var elem = getElementById(id);
    var newElem = document.createElement(label);
    elem.appendChild(newElem);
    /// todo del tiron sería: getElementById(id).appendChild(document.createElement(label));
}