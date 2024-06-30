// Primero, encontramos el cuadro de texto donde el usuario escribe
const inputTextoOriginal = document.getElementById("textarea_uno");
// Luego, encontramos el cuadro de texto donde se muestra el texto encriptado
const outputTextoEncriptado = document.getElementById("textarea_dos");

    // Cuando el usuario escribe algo en el cuadro de texto original
    inputTextoOriginal.addEventListener("input", () => {
        // Copiamos lo que el usuario escribió al cuadro de texto encriptado
        outputTextoEncriptado.value = inputTextoOriginal.value; // Corrección en la referencia
        // Llamamos a una función para mostrar u ocultar partes de la página
        actualizarVisibilidad();
    });


// Esta es la función que muestra u oculta partes de la página
function actualizarVisibilidad() {
    // Encontramos lo que el usuario escribió
    let texto = inputTextoOriginal.value;
    // Encontramos la sección que dice que no hay ningún mensaje
    let seccionSinMensaje = document.getElementById('seccion_dos');
    // Encontramos la sección que muestra el cuadro de texto encriptado
    let seccionConMensaje = document.getElementById('seccion_tres');

    // Si el cuadro de texto original está vacío (no hay nada escrito)
    if (texto === "") {
        // Mostramos la sección que dice que no hay ningún mensaje
        seccionSinMensaje.style.display = "block";
        // Ocultamos la sección del cuadro de texto encriptado
        seccionConMensaje.style.display = "none";
    } else {
        // Si hay algo escrito, ocultamos la sección que dice que no hay ningún mensaje
        seccionSinMensaje.style.display = "none";
        // Y mostramos la sección del cuadro de texto encriptado
        seccionConMensaje.style.display = "block";
    }
}

