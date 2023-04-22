//creamos un objeto con las llaves proporcionadas en el desafio
let llaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

//Creamos la funcion encriptar usando expresiones regulares con el modificador global
function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function (match) {
    return llaves[match];
  });
}

//Creamos la funcion para desencriptar
function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

//Creamos otra funcion para contar cuantas palabras encripto
function contarPalabras(texto) {
  let palabras = texto.trim().split(/\s+/);
  let palabrasConLetrasEnLlaves = 0;

  for (let palabra of palabras) {
    if (contieneLetraEnLlaves(palabra)) {
      palabrasConLetrasEnLlaves++;
    }
  }

  return palabrasConLetrasEnLlaves;
}

let contadorPalabras = 0;

//Adicional crearemos otra funcion para validar que la palabra contenga una letra de la llave
function contieneLetraEnLlaves(palabra) {
  for (let letra in llaves) {
    if (palabra.includes(letra)) {
      return true;
    }
  }
  return false;
}

//Creamos la funcion para encriptar y la asignamos al boton con onclick
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

//Creamos la funcion para desencriptar y la asignamos al boton con onclick
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

//Creamos la funcion procesarBotonCopiar para el boton COPIAR
function procesarBotonCopiar() {
  let texto = document.getElementById("textoEncriptado").value.trim();
  if (!texto) {
    notificarNadaQueCopiar();
    return;
  }
  copiarAlPortapapeles();
}

//Creamos la funcion para copiar al portapapeles
function copiarAlPortapapeles() {
  let texto = document.getElementById("textoEncriptado").value;

  if (texto.trim() === "") {
    return;
  }

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      mostrarNotificacion("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

//creando el boton pegar aprendiendo el evento click Obtenemos el botón de pegar usando el método getElementById
const pegar = document.getElementById("pegar");

//Asignamos un evento click al botón de pegar
pegar.addEventListener("click", function (event) {
  event.preventDefault();
  //Usamos el objeto navigator.clipboard para acceder al portapapeles
  navigator.clipboard
    .readText()
    .then((texto) => {
      //Asignamos el texto del portapapeles al valor de la textarea que queramos
      document.getElementById("textoOriginal").value = texto;
      //Llamamos a la función mostrarOcultarDivs para activar la segunda textarea
      mostrarOcultarDivs();
      //Mostramos una notificación indicando que se ha pegado el texto
      mostrarNotificacion("Texto pegado correctamente");
    })
    .catch((error) => {
      //Mostramos una notificación indicando que hubo un error al pegar el texto
      mostrarNotificacion("Error al pegar el texto: " + error);
    });
});

//Creamos la funcion restablecer para limpiar nuestra area de trabajo con el Boton restablecer
function borrarSegundoTextarea() {
  // Obtenemos la referencia al segundo textarea
  let salida = document.getElementById("textoEncriptado");
  // Obtenemos el valor del segundo textarea y lo eliminamos los espacios en blanco al inicio y al final
  let texto = salida.value.trim();
  // Obtenemos la referencia a la lista de sesiones
  let listaSesiones = document.getElementById("listaSesiones");

  // Comprobamos si el segundo textarea y la lista de sesiones estan vacios
  if (texto === "" && listaSesiones.selectedIndex === -1) {
    // Mostramos una notificacion si no hay nada que limpiar
    mostrarNotificacion("No hay nada que limpiar");
    return;
  }

  // Limpiamos el segundo textarea
  salida.value = "";
  // Mostramos una notificacion indicando que la limpieza se ha realizado
  mostrarNotificacion("Limpieza realizada");

  // Comprobamos si se ha seleccionado una sesion
  if (listaSesiones.selectedIndex !== -1) {
  // Si se ha seleccionado una sesion, eliminamos la lista de sesiones, desactivamos la sesion activa y limpiamos el primer textarea
  //listaSesiones.innerHTML = "";
  sesionActiva = false;
  document.getElementById("textoOriginal").value = "";
  }
}

//Ocultar Divs dinamicamente si hay o no hay ningun texto en nuestra area de trabajo
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
      // Verificar el valor de la variable global y asignar el valor al segundo textarea según corresponda
      if (sesionActiva) {
        // Si hay una sesión activa, asignar el valor encriptado al segundo textarea
        document.getElementById("textoEncriptado").value =
          sesion.textoEncriptado;
      } else {
        // Si no hay una sesión activa, asignar el mismo valor que el primero al segundo textarea
        document.getElementById("textoEncriptado").value = texto;
      }
    }
  }, 0); // El tiempo de espera es 0 milisegundos
}

//Creamos la variable global para almacenar el identificador del temporizador
let timerId = null;
//Creamos la variable global para almacenar el identificador del intervalo
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

document.getElementById("historial").addEventListener("click", function () {
  let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
  let listaSesiones = document.getElementById("listaSesiones");
  //Agregamos esta línea para eliminar los elementos div anteriores
  listaSesiones.innerHTML = "";

  if (sesiones.length === 0) {
    mostrarNotificacion("No tienes nada guardado");
  } else {
    sesiones.forEach((sesion) => {
      let sesionDiv = document.createElement("div");
      sesionDiv.innerHTML = `ID: ${sesion.id}<br>${sesion.nombre}<br>`; //usando template strings 
      sesionDiv.className = "sesion";
      //Agregamos un botón de eliminar al lado del nombre de la sesión
      let botonEliminar = document.createElement("button");
      botonEliminar.textContent = "X";
      botonEliminar.className = "eliminar";
      //Agregamos el evento click al botón de eliminar
      botonEliminar.addEventListener("click", function () {
        //Eliminamos la sesión del localStorage usando el método filter
        sesiones = sesiones.filter((s) => s.id !== sesion.id);
        localStorage.setItem("sesiones", JSON.stringify(sesiones));
        //Eliminamos el elemento div de la lista de sesiones usando el método removeChild
        listaSesiones.removeChild(sesionDiv);
        //Mostramos una notificación indicando que se ha eliminado la sesión
        mostrarNotificacion("Sesión eliminada: " + sesion.nombre);
      });
      //Agregamos el botón de eliminar al elemento div
      sesionDiv.appendChild(botonEliminar);

      sesionDiv.addEventListener("click", function () {
        document.getElementById("textoOriginal").value = sesion.textoOriginal;
        sesionActiva = true;
        document.getElementById("textoEncriptado").value =
          sesion.textoEncriptado;
        mostrarNotificacion("Sesión seleccionada: " + sesion.nombre);
        mostrarOcultarDivs();
      });
      //Solo tenemos una vez esta línea, dentro del forEach
      listaSesiones.appendChild(sesionDiv);
    });
  }
});

let sesionActiva = false;

//Sacamos el evento click del botón guardar fuera del evento click de la lista de sesiones
document.getElementById("guardar").addEventListener("click", function () {
  let nombreSesion = prompt(
    "Ingrese un nombre para tu sesión maximo 12 caracteres:"
  );
  nombreSesion = nombreSesion.substring(0, 12);

  if (nombreSesion === null || nombreSesion.trim() === "") {
    mostrarNotificacion("Debe ingresar un nombre para la sesión");
    return;
  }

  let textoOriginal = document.getElementById("textoOriginal").value.trim();
  let textoEncriptado = document.getElementById("textoEncriptado").value.trim();

  if (textoOriginal === "" || textoEncriptado === "") {
    mostrarNotificacion(
      "Debe tener texto en ambos textareas para guardar la sesión"
    );
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

// Creamos una variable global que indica si el historial está visible o no
let historialVisible = false;
// Obtenemos la referencia al elemento lateral
let lateral = document.querySelector(".lateral");
// Agregamos el evento click al botón de historial
document.getElementById("historial").addEventListener("click", function () {
  // Comprobamos si el historial está visible o no
  if (historialVisible) {
    // Si está visible, lo ocultamos cambiando la propiedad visibility a hidden
    lateral.style.visibility = "hidden";
    // Cambiamos el valor de la variable a false
    historialVisible = false;
  } else {
    // Si no está visible, lo mostramos cambiando la propiedad visibility a visible
    lateral.style.visibility = "visible";
    // Cambiamos el valor de la variable a true
    historialVisible = true;
  }
});

// Creamos una función que recibe un objeto sesion y lo agrega al elemento listaSesiones
function agregarSesion(sesion) {
  // Obtenemos la referencia al elemento listaSesiones
  let listaSesiones = document.getElementById("listaSesiones");
  // Creamos un elemento div con la información de la sesión
  let sesionDiv = document.createElement("div");
  sesionDiv.innerHTML = `ID: ${sesion.id}<br>${sesion.nombre}<br>`;
  sesionDiv.className = "sesion";
  // Creamos un botón de eliminar al lado del nombre de la sesión
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";
  botonEliminar.className = "eliminar";
  // Agregamos el evento click al botón de eliminar
  botonEliminar.addEventListener("click", function () {
    // Eliminamos la sesión del localStorage usando el método filter
    let sesiones = JSON.parse(localStorage.getItem("sesiones")) || [];
    sesiones = sesiones.filter((s) => s.id !== sesion.id);
    localStorage.setItem("sesiones", JSON.stringify(sesiones));
    // Eliminamos el elemento div de la lista de sesiones usando el método removeChild
    listaSesiones.removeChild(sesionDiv);
    // Mostramos una notificación indicando que se ha eliminado la sesión
    mostrarNotificacion("Sesión eliminada: " + sesion.nombre);
  });
  // Agregamos el botón de eliminar al elemento div
  sesionDiv.appendChild(botonEliminar);

  // Agregamos el evento click al elemento div
  sesionDiv.addEventListener("click", function () {
    document.getElementById("textoOriginal").value = sesion.textoOriginal;
    document.getElementById("textoEncriptado").value = sesion.textoEncriptado;
    mostrarNotificacion("Sesión seleccionada: " + sesion.nombre);
    mostrarOcultarDivs();
  });
  // Agregamos el elemento div al final del elemento listaSesiones
  listaSesiones.appendChild(sesionDiv);
}