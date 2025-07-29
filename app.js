//declaracion de variables
let lista_amigos = [];

//funcionalidad para agregar a la lista
function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value;
    if (amigoAgregado == " "){
        alert("no ingresar campos vacios, intentelo nuevamente.")
        limpiarCaja()
    }else{
        lista_amigos.push(amigoAgregado)
        limpiarCaja()
    }
}

function limpiarCaja(){
    document.querySelector("#amigo").value = " ";
}