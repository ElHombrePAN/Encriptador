let saludo = "Bienvenido";
console.log(`${saludo} estamos probando la conexion de JS`);

/*
LLaves para el encriptador
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

*/

//creando un objeto con las llaves
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

function procesar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = encriptar(texto);
    salida.value = resultado;
    }

function procesarDesencriptar(){
    let entrada = document.getElementById("textoOriginal");
    let salida = document.getElementById("textoEncriptado");
    let texto = entrada.value;
    let resultado = desencriptar(texto);
    salida.value = resultado;
    }

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

function borrarSegundoTextarea() {
    document.getElementById("textoEncriptado").value = "";
    }  

let textoOriginal = "Hola mundo"
let textoEncriptado = encriptar(textoOriginal);
  
  //Crear los botones
console.log(llaves);
console.log(textoOriginal); // hola mundo
console.log(textoEncriptado); // hoberlai mufatndober