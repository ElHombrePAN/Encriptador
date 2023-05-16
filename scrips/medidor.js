// JS
// Obtenemos la referencia a los elementos del HTML
let contenedor = document.getElementById("contenedor");
let barra = document.getElementById("barra");
let porcentaje = document.getElementById("porcentaje");

// Definimos el límite del localStorage en megabytes
let limite = 5;

// Agregamos un listener al evento "guardarSesion" para llamar a la función actualizarBarra
document.addEventListener("guardarSesion", actualizarBarra);

// Definimos una función para actualizar la barra de progreso
function actualizarBarra() {
  // Obtenemos todas las claves del localStorage
  let claves = Object.keys(localStorage);
  // Inicializamos una variable para almacenar el total de bytes
  let totalBytes = 0;
  // Recorremos las claves con un bucle for
  for (let i = 0; i < claves.length; i++) {
    // Obtenemos el valor de cada clave
    let valor = localStorage.getItem(claves[i]);
    // Convertimos el valor en una cadena JSON
    let cadena = JSON.stringify(valor);
    // Obtenemos el número de caracteres de la cadena
    let caracteres = cadena.length;
    // Obtenemos el número de bytes de la cadena (asumiendo UTF-16)
    let bytes = caracteres * 2;
    // Sumamos los bytes al total
    totalBytes += bytes;
  }
  // Convertimos el total de bytes en megabytes
  let megabytes = totalBytes / (1024 * 1024);
  // Calculamos el porcentaje del espacio usado respecto al límite
  let porcentajeUsado = (megabytes / limite) * 100;
  // Asignamos el porcentaje al ancho de la barra y al texto del porcentaje
  barra.style.width = porcentajeUsado + "%";
  porcentaje.innerText = porcentajeUsado.toFixed(2) + "%";
}
