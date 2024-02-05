let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
    return;
}

//Verificar si el número que el usuario ingreso es igual al numero secreto
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroSecreto===numeroDeUsuario){
    asignarElementoTexto('p', `Felicidades!, Lo hiciste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p','El número secreto es menor');
        }
        else{
            asignarElementoTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    }

// Genera un número entre 1 y 10 (ambos inclusive) para ser el número secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
       asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    }else{
    //Si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    } 
}

// Reinicia la partida
function condicionesIniciales(){
    asignarElementoTexto('h1', 'Juego del numero Secreto');
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
//Limpiar la caja();
limpiarCaja();
//Indicar mensaje de intervalos de números
//Generar número aleatorio
//Inicializar el número de intentos
condicionesIniciales();
//Desabilitar el boton númevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();