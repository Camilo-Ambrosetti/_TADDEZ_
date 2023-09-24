var nombre = document.getElementById("nombre");
var error = document.getElementById("error");
error.style.color = "red"
var form = ducument.getElementById("fromulario");

form.addEventListener(submit), function(evt){
    evt.preventDefault();
    var mensajesError = []
    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("ingresa tu nombre");

    }
    error.innerHTML = mensajesError;
}