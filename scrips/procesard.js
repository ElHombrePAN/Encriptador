//Obtenemos el botón por su id y lo guardamos en una constante
const BOTON_DESENCRIPTAR = document.getElementById("desencriptar");
//Agregamos el evento click al botón y le pasamos la función procesarDesencriptar como callback
BOTON_DESENCRIPTAR.addEventListener("click", procesarDesencriptar);
//Creamos la función para desencriptar y la asignamos al botón con onclick
function procesarDesencriptar() {
  let entrada = document.getElementById("textoOriginal");
  let salida = document.getElementById("textoEncriptado");
  let texto = entrada.value;

  if (texto.trim() === "") {
    mostrarNotificacion("No ingresaste ningún texto");
    return;
  }

  let resultado = desencriptar(texto);
  salida.value = resultado;
  mostrarNotificacion("Texto desencriptado correctamente");
}