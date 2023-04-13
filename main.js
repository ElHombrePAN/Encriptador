let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
}

function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function(match) { //usando expresiones regulares con el modificador global
      return llaves[match];
    });
    }
function desencriptar(texto) {
    return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    }
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match

//encriptar
function procesar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = encriptar(texto);
    salida.value = resultado;
    }

//desencriptar
function procesarDesencriptar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = desencriptar(texto);
    salida.value = resultado;
    }

//copiar
function copiarAlPortapapeles() {
    let texto = document.getElementById("textoEncriptado").value;
    navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
    }

//Boton restablecer
function borrarSegundoTextarea() {
    document.getElementById("textoEncriptado").value = "";
    }  
  
  //Ocultar Divs
function mostrarOcultarDivs() {
    setTimeout(() => {
    let texto = document.getElementById("textoOriginal").value;
    let divPasivo = document.getElementById("pasivo");
    let divActivo = document.getElementById("activo");
    let textoEncriptado = document.getElementById("textoEncriptado");
    if (texto == "") {
      // Si el primer textarea está vacío, mostrar el div pasivo y ocultar el div activo
      divPasivo.style.display = "block";
      divActivo.style.display = "none";
    } else {
      // Si el primer textarea tiene algún valor, ocultar el div pasivo y mostrar el div activo
      divPasivo.style.display = "none";
      divActivo.style.display = "block";
      // Asignar el valor del primer textarea al segundo
      textoEncriptado.value = texto;
    }
    }, 0); // El tiempo de espera es 0 milisegundos
}