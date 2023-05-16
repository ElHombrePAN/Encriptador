//FUNCION PROCESAR Y ASIGANDO AL BOTON
//Obtenemos el botón por su id y lo guardamos en una constante
const BOTON_ENCRYPTAR = document.getElementById("encriptar");

//Agregamos el evento click al botón y le pasamos la función procesar como callback
BOTON_ENCRYPTAR.addEventListener("click", procesar);

//Creamos la función para encriptar
function procesar() {
  let entrada = document.getElementById("textoOriginal");
  let salida = document.getElementById("textoEncriptado");
  let texto = entrada.value;

  if (texto.trim() === "") {
    mostrarNotificacion("No ingresaste ningún texto");
    return;
  }

  let resultado = encriptar(texto);
  contadorPalabras += contarPalabras(texto);
  document.getElementById("contadorPalabras").innerText =
    "Palabras encriptadas: " + contadorPalabras;
  salida.value = resultado;
  mostrarNotificacion("Texto encriptado correctamente");
}