// Variables globales para temporizador e intervalo
let timerId = null;
let intervalId = null;

// Función para mostrar notificación
function mostrarNotificacion(mensajeTexto) {
    mensaje.innerText = mensajeTexto;
    notificacion.classList.add("show");

    clearTimeout(timerId);
    clearInterval(intervalId);

    timerId = setTimeout(() => {
        notificacion.classList.remove("show");
    }, 3000);

    let progress = document.querySelector("#notificacion progress");
    progress.max = 3000;
    progress.value = 3000;

    intervalId = setInterval(() => {
        progress.value -= 10;
        if (progress.value === 0) {
            clearInterval(intervalId);
        }
    }, 10);
}

// Elementos de notificación
const notificacion = document.getElementById("notificacion");
const mensaje = document.querySelector(".mensaje");
const cerrar = document.getElementById("cerrar");

// Evento para cerrar notificación
cerrar.addEventListener("click", (event) => {
    event.preventDefault();
    notificacion.classList.remove("show");
    clearTimeout(timerId);
    clearInterval(intervalId);
});
