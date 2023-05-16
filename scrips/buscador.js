// Obtenemos la referencia al elemento buscador
let buscador = document.getElementById("buscador");

// Creamos una función que busca el valor ingresado en el array de sesiones
function buscarSesion() {
  // Obtenemos el valor del buscador en minúsculas
  let valor = buscador.value.toLowerCase();
  // Obtenemos el array de sesiones del localStorage
  let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
  // Recorremos el array de sesiones
  for (let i = 0; i < sesiones.length; i++) {
    // Obtenemos el nombre de la sesión en minúsculas
    let nombre = sesiones[i].nombre.toLowerCase();
    // Obtenemos el elemento div que corresponde a la sesión
    let sesionDiv = document.getElementById("sesion-" + sesiones[i].id);
    // Comparamos si el valor del buscador está incluido en el nombre de la sesión usando indexOf()
    if (nombre.indexOf(valor) > -1) {
      // Si está incluido, mostramos el elemento div
      sesionDiv.style.display = "block";
    } else {
      // Si no está incluido, ocultamos el elemento div
      sesionDiv.style.display = "none";
    }
  }
}