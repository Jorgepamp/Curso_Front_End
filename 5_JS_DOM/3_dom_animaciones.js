// para parar animación

// se coge los div con la clase círculo

var arrayDiv = document.getElementsByClassName("circulo");

// los recorremos para pausarlos por JS
for (var i = 0; i < arrayDiv.length; i++) {
    arrayDiv[i].style.webkitAnimationPlayState = "paused";
}
//cogemos el Div padre, cn la clase marco
var divMarco = document.getElementsByClassName("marco")[0];
//le añadimos el imput(input type="button" value"Animate" onclick="clickboton")
var boton = divMarco.appendChild(document.createElement("input"));
boton.setAttribute("type", "button");
boton.setAttribute("value", "¡Animate!");
//creamos una funcion para animar de nuevo a los círculos.
function clickboton() {
    for (var i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].style.webkitAnimationPlayState = "running";
    }
}

// hace que se anime al pulsar el botón.
boton.setAttribute("onclick", "clickboton()")