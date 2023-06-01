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

function encriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

