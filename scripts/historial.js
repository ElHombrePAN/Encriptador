// Obtenemos la referencia al elemento listaSesiones
let listaSesiones = document.getElementById("listaSesiones");
// Creamos una variable global que indica si hay una sesión activa o no
let sesionActiva = false;

// Agregamos el evento click al botón de guardar
document.getElementById("btn_guardar").addEventListener("click", () => {
    let nombreSesion = prompt(
        "Ingrese un nombre para tu sesión máximo 12 caracteres:"
    );
    nombreSesion = nombreSesion.substring(0, 12);

    if (nombreSesion === null || nombreSesion.trim() === "") {
        mostrarNotificacion("Debe ingresar un nombre válido ");
        return;
    }

    let textoOriginal = document.getElementById("textarea_uno").value.trim();
    let textoEncriptado = document.getElementById("textarea_dos").value.trim();

    if (textoOriginal === "" || textoEncriptado === "") {
        mostrarNotificacion("No hay nada que guardar ");
        return;
    }

    // Crear un objeto Date con la fecha y hora actual
    let fecha = new Date();
    // Convertir el objeto Date en una cadena con el formato local y las opciones deseadas
    let id = fecha.toLocaleString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    let sesion = {
        id: id,
        nombre: nombreSesion,
        textoOriginal: textoOriginal,
        textoEncriptado: textoEncriptado,
        //contadorPalabras: contadorPalabras,
    };

    let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
    sesiones.push(sesion);
    localStorage.setItem("sesiones", JSON.stringify(sesiones));

    mostrarNotificacion("Sesión guardada correctamente");
    // Asignar el valor true a la variable global
    sesionActiva = true;

    // Llamar a la función agregarSesion pasándole el objeto sesion
    agregarSesion(sesion);
});

// Creamos una función que recibe un objeto sesion y lo agrega al elemento listaSesiones
function agregarSesion(sesion) {
    // Creamos un elemento div con la información de la sesión
    let sesionDiv = document.createElement("div");
    sesionDiv.className = "sesion";
    sesionDiv.innerHTML =
        `<h4>Nombre de sesion</h4>
        <p class="p-sesion">${sesion.nombre}</p>
        <br>
        <h4 class="s-fecha">Fecha de creacion</h4> 
        <p class="sesion-id">${sesion.id}`; //usando template strings

    // Creamos un botón de eliminar al lado del nombre de la sesión
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Borrar sesion";
    botonEliminar.className = "eliminar";
    // Agregamos el evento click al botón de eliminar
    botonEliminar.addEventListener("click", () => {
        // Eliminamos la sesión del localStorage usando el método filter
        let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
        sesiones = sesiones.filter((s) => s.id !== sesion.id);
        localStorage.setItem("sesiones", JSON.stringify(sesiones));
        // Eliminamos el elemento div de la lista de sesiones usando el método removeChild
        listaSesiones.removeChild(sesionDiv);
        // Restamos el número de palabras encriptadas de la sesión al contador
        //contadorPalabras -= sesion.contadorPalabras;
        // Actualizamos el elemento que muestra el contador en la pantalla
        //document.getElementById("contadorPalabras").innerText =
          //  "Palabras encriptadas: " + contadorPalabras;
        // Mostramos una notificación indicando que se ha eliminado la sesión
        mostrarNotificacion("Sesión eliminada: " + sesion.nombre);
    });
    // Agregamos el botón de eliminar al elemento div
    sesionDiv.appendChild(botonEliminar);

    // Agregamos el evento click al elemento div
    sesionDiv.addEventListener("click", () => {
        document.getElementById("textarea_uno").value = sesion.textoOriginal;
        document.getElementById("textarea_dos").value = sesion.textoEncriptado;
        // Asignamos el número de palabras encriptadas de la sesión al contador
        //contadorPalabras = sesion.contadorPalabras;
        // Actualizamos el elemento que muestra el contador en la pantalla
        //document.getElementById("contadorPalabras").innerText =
          //  "Palabras encriptadas: " + contadorPalabras;
        mostrarNotificacion("Sesión seleccionada: " + sesion.nombre);
        actualizarVisibilidad();
    });

    // Agregamos el elemento div al final del elemento listaSesiones usando el método insertAdjacentElement
    listaSesiones.insertAdjacentElement("beforeend", sesionDiv); // Esta es la línea que hay que cambiar
}

// Obtenemos las sesiones guardadas del localStorage y las mostramos en la lista de sesiones
let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
if (sesiones.length === 0) {
    mostrarNotificacion("No tienes nada guardado");
} else {
    sesiones.forEach((sesion) => {
        // Llamamos a la función agregarSesion por cada sesión guardada
        agregarSesion(sesion);
    });
}

// Obtenemos todos los botones que abren una ventana modal
let openModalButtons = document.querySelectorAll("[data-open]");
// Obtenemos todos los botones que cierran una ventana modal
let closeModalButtons = document.querySelectorAll("[data-close]");
// Obtenemos todas las ventanas modales
let modals = document.querySelectorAll(".modal");

// Recorremos cada botón de abrir
openModalButtons.forEach((button) => {
    // Agregamos el evento click al botón
    button.addEventListener("click", () => {
        // Obtenemos el valor del atributo data-open del botón
        let modalId = button.getAttribute("data-open");
        // Obtenemos la ventana modal con ese id
        let modal = document.getElementById(modalId);
        // Añadimos la clase .open a la ventana modal
        modal.classList.add("open");
    });
});

// Recorremos cada botón de cerrar
closeModalButtons.forEach((button) => {
    // Agregamos el evento click al botón
    button.addEventListener("click", () => {
        // Obtenemos la ventana modal que contiene al botón
        let modal = button.closest(".modal");
        // Quitamos la clase .open a la ventana modal
        modal.classList.remove("open");
    });
});

// Recorremos cada ventana modal
modals.forEach((modal) => {
    // Agregamos el evento click a la ventana modal
    modal.addEventListener("click", () => {
        // Quitamos la clase .open a la ventana modal
        modal.classList.remove("open");
    });
});

// Agregamos el evento click al elemento .modal-dialog
document.querySelector(".modal-dialog").addEventListener("click", (e) => {
    // Evitamos que se propague el evento al elemento .modal
    e.stopPropagation();
});

// Agregamos el evento click al botón de historial
document.getElementById("btn_historial").addEventListener("click", () => {
    let modal = document.getElementById("modalHistorial");
    modal.classList.add("open");
});