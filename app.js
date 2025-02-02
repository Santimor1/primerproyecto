// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// COMO PRIMER PASO CREARE UN ARRAY (LISTA), PARA QUE EN ESTA SE GUARDEN TODOS LOS NOMBRES QUE INGRESE.
let listaAmigos = [];
console.log("lista de amigos inicial", listaAmigos);
let listaSorteo = []
//CREARE UNA FUNCION PARA AÑADIR LOS AMIGOS A LA LISTA, VERIFICAR QUE NO SEAN VACIOS Y ACTUALIZAR LA LISTA.
function agregarAmigo(){
    let nombreIngresado = document.querySelector("#amigo").value;
    //let verificar = listaAmigos.includes(nombreIngresado)
    if (nombreIngresado === ""){
        alert("INGRESE UN NOMBRE VALIDO,POR FAVOR");
    }else{
        listaAmigos.push(nombreIngresado);
        console.log("lista de amigos actualizada",listaAmigos);
        limpiarCaja();
    }

    mostrarLista()
    
}
function limpiarCaja(){
    let valorCaja = document.querySelector("#amigo")
    valorCaja.value = "";
}


function mostrarLista(){
    let lugarLista = document.querySelector("#listaAmigos")
    let contenidoLista = ""
    //let listaParaMostrar = listaAmigos 
    listaAmigos.innerHTML = ""
    
    for(let i = 0;i< listaAmigos.length;i=i+1){
        contenidoLista += `<li> ${listaAmigos[i]} </li>`
    } 
    lugarLista.innerHTML = `<li><h2>Tu lista:</h2></li> ${contenidoLista}`  
}

function sortearAmigo(){
    let lugarSorteo = document.querySelector("#resultado")
    let contenidoSorteo = ""
    let indiceNumeros = Math.floor(Math.random()*listaAmigos.length);
    let numeroMaximo = listaAmigos.length
    
    if(numeroMaximo === 0){
        lugarSorteo.innerHTML = "No hay amigos para sortear"
        return
    }else{
        if(listaSorteo.length >= listaAmigos.length){
            lugarSorteo.innerHTML = "Se acabaron los amigos para sortear"
            return
        }else if(listaSorteo.includes(indiceNumeros)){
            
            return sortearAmigo()
            
        }else{
            contenidoSorteo += `<li>${listaAmigos[indiceNumeros]}</li>`
            lugarSorteo.innerHTML = "Tu amigo será : " + contenidoSorteo
            listaSorteo.push(indiceNumeros)
        }
    
    }  
    
}


