let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let munieco = document.querySelector(".contenedor-munieco");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value
}

