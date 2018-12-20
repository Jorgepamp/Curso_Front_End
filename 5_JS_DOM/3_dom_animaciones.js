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

var botonStop = divMarco.appendChild(document.createElement("input"));
botonStop.setAttribute("type", "button");
botonStop.setAttribute("Value", "¡Párate!");

function clickbotonstop() {
    for (var i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].style.webkitAnimationPlayState = "paused";
    }
}
botonStop.setAttribute("onclick", "clickbotonstop()")

/* el mismo caso pero en un solo botón. En vez de dos botones.
Crear el boton en el html antes del marco pondríamos: <input type="button" value="Play" onclick="playPauseAnim('play')"/>

en JS tenemos que hacer la funcion que sea capaz de hacer play y pause con el mismo botón:

var arrayDiv = document.getElementsByClassName("circulo");
function playPauseAnim(estado) {
    var playState = "paused"
    if (estado == "play"){
        playState ="runing";
    }
    for (var i = 0; i < arrayDiv.length; i++) {
        arrayDiv[i].style.webkitAnimationPlayState = playState;
    }
}

*/