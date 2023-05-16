// Obtener la referencia al botón limpiar por su id
const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", borrarSegundoTextarea);

//Definir la función borrarSegundoTextarea para limpiar el área de trabajo
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
 // Reiniciamos el contadorPalabras a 0
 contadorPalabras = 0;
 // Actualizamos el elemento que muestra el contador en la pantalla
 document.getElementById("contadorPalabras").innerText =
 "Palabras encriptadas: " + contadorPalabras;
 // Mostramos una notificacion indicando que la limpieza se ha realizado
 mostrarNotificacion("Limpieza realizada");

 // Comprobamos si se ha seleccionado una sesion
 //if (listaSesiones.selectedIndex !== -1) {
 // Si se ha seleccionado una sesion, eliminamos la lista de sesiones, desactivamos la sesion activa y limpiamos el primer textarea
 //listaSesiones.innerHTML = "";
 //sesionActiva = false;
 document.getElementById("textoOriginal").value = "";
 //}

 // Llamar a la función mostrarOcultarDivs para cambiar la visibilidad de los divs
 mostrarOcultarDivs();
}