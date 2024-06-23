let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroUsuario == numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento("p", 'El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);

    // Si ya sorteamos todos lo numeros
    if(listasNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        // Si el numero generado esta incluido en la lista
        if(listasNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar la caja 
    limpiarCaja();
    // Indicar mensaje de intervalos
    condicionesIniciales();

    document.querySelector("#reiniciar").setAttribute('disabled', true);
}

condicionesIniciales();

