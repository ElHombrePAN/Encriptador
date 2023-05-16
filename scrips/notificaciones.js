//Creamos la variable global para almacenar el identificador del temporizador
let timerId = null;
//Creamos la variable global para almacenar el identificador del intervaloDebe tener texto en ambos textareas para guardar la sesión 
let intervalId = null;
//Creamos la funcion notificacion y creamos la variable notificacion para asignarle una clase y trabajar en CSS
function mostrarNotificacion(mensajeTexto) {
  mensaje.innerText = mensajeTexto; //se cambia el texto del párrafo por el que se quiere mostrar
  notificacion.classList.add("show");
  //Cancelamos el temporizador anterior si existe
  clearTimeout(timerId);
  //Cancelamos el intervalo anterior si existe
  clearInterval(intervalId);
  //Creamos un nuevo temporizador y guardamos su identificador en la variable timerId
  timerId = setTimeout(function () {
    notificacion.classList.remove("show");
  }, 3000);
  //Obtenemos el elemento progress dentro de la notificación
  let progress = document.querySelector("#notificacion progress");
  //Asignamos el valor máximo al elemento progress
  progress.max = 3000;
  //Asignamos el valor actual al elemento progress
  progress.value = 3000;
  //Creamos un nuevo intervalo para actualizar el valor del elemento progress cada 10 milisegundos y guardamos su identificador en la variable intervalId
  intervalId = setInterval(function () {
    //Reducimos el valor del elemento progress en 10 unidades
    progress.value -= 10;
    //Si el valor del elemento progress llega a cero, detenemos el intervalo
    if (progress.value === 0) {
      clearInterval(intervalId);
    }
  }, 10);
}

//Cerrar notificaciones usadas en las notificaciones anteriores
const notificacion = document.getElementById("notificacion"); //usamos el ID del div de la notificacion
const mensaje = document.querySelector(".mensaje"); //usamos su clase
const cerrar = document.getElementById("cerrar"); //usamos el ID del boton cerrar

cerrar.addEventListener("click", function (event) {
  event.preventDefault();
  notificacion.classList.remove("show"); //usamos de nuevo la clase en el evento click
  //Detenemos el temporizador si existe
  clearTimeout(timerId);
  //Detenemos el intervalo si existe
  clearInterval(intervalId);
});