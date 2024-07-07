// Referencias a los elementos del DOM
const inputTextoOriginal = document.getElementById("textarea_uno");
const outputTextoEncriptado = document.getElementById("textarea_dos");

// Actualiza el texto encriptado y la visibilidad de las secciones
inputTextoOriginal.addEventListener("input", () => {
    outputTextoEncriptado.value = inputTextoOriginal.value;
    actualizarVisibilidad();
});

// Muestra u oculta secciones y botones en función del texto ingresado
function actualizarVisibilidad() {
    const texto = inputTextoOriginal.value;
    const seccionSinMensaje = document.getElementById('seccion_dos');
    const seccionConMensaje = document.getElementById('seccion_tres');

    if (texto === "") {
        seccionSinMensaje.style.display = "block";
        seccionConMensaje.style.display = "none";
        document.getElementById("btn_limpiar").disabled = true;
        document.getElementById("btn_encriptar").disabled = true;
        document.getElementById("btn_desencriptar").disabled = true;
    } else {
        seccionSinMensaje.style.display = "none";
        seccionConMensaje.style.display = "block";
        document.getElementById("btn_limpiar").disabled = false;
        document.getElementById("btn_encriptar").disabled = false;
        document.getElementById("btn_desencriptar").disabled = false;
    }
}