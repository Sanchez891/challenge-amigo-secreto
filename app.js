//declaracion de variables
let lista_amigos = [];

//funcionalidad para agregar a la lista
function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value;
    if (amigoAgregado == " "){
        alert("no ingresar campos vacios, intentelo nuevamente.");
        limpiarCaja();
    }else{
        lista_amigos.push(amigoAgregado);
        mostrarLista();
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector("#amigo").value = " ";
}

//funcion para mostrar la lista de amigos en la pantalla
function mostrarLista(){
    var listaImprimida = document.getElementById("listaAmigos");
    listaImprimida.innerHTML = " ";
    for (let i = 0; i < lista_amigos.length; i++){
        var amigo = document.createElement("li");
        amigo.textContent = lista_amigos[i];
        listaImprimida.appendChild(amigo);
    }
}