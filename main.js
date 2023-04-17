let llaves = {    //creamos un objeto con las llaves proporcionadas en el desafio
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat" 
};

function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function(match) { //usando expresiones regulares con el modificador global
    return llaves[match];
  });
}

function desencriptar(texto) {
  return texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
}

//Creamos la funcion para encriptar
function procesar() {
  let entrada = document.getElementById("textoOriginal");
  let salida = document.getElementById("textoEncriptado");
  let texto = entrada.value;

  if (texto.trim() === "") {
    mostrarNotificacion("No ingresaste ningún texto");
    return;
  }

  let resultado = encriptar(texto);
  salida.value = resultado;
  mostrarNotificacion("Texto encriptado correctamente");
}

//Creamos la funcion para desencriptar
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

//Creamos la funcion para copiar al portapapeles
function copiarAlPortapapeles() {
  let texto = document.getElementById("textoEncriptado").value;

  if (texto.trim() === "") {
    return;
  }

  navigator.clipboard.writeText(texto)
    .then(() => {
      mostrarNotificacion("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
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

//Creamos la funcion restablecer para limpiar nuestra area de trabajo con el Boton restablecer
function borrarSegundoTextarea() {
  let salida = document.getElementById("textoEncriptado");
  let texto = salida.value.trim();

  if (texto === "") {
    mostrarNotificacion("No hay nada que limpiar");
    return;
  }

  salida.value = "";
  mostrarNotificacion("Espacio limpiado");
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
      // Asignar el valor del primer textarea al segundo
      textoEncriptado.value = texto;
    }
  }, 0); // El tiempo de espera es 0 milisegundos
}

//Creamos la variable global para almacenar el identificador del temporizador
let timerId = null;
//Creamos la funcion notificacion y creamos la variable notificacion para asignarle una clase y trabajar en CSS
function mostrarNotificacion(mensajeTexto) {
  mensaje.innerText = mensajeTexto; //se cambia el texto del párrafo por el que se quiere mostrar
  notificacion.classList.add("show");
  //Cancelamos el temporizador anterior si existe
  clearTimeout(timerId);
  //Creamos un nuevo temporizador y guardamos su identificador en la variable timerId
  timerId = setTimeout(function() {
    notificacion.classList.remove("show");
  }, 3000);
}

//Cerrar notificaciones
const notificacion = document.getElementById("notificacion");//usamos el ID del div de la notificacion
const mensaje = document.querySelector(".mensaje"); //usamos su clase
const cerrar = document.getElementById("cerrar");//usamos el ID del boton cerrar

cerrar.addEventListener("click", function(event) {
  event.preventDefault();
  notificacion.classList.remove("show");//usamos de nuevo la clase en el evento click
});


