// Añadimos un evento de clic al botón con el ID "limpiar"
document.getElementById("btn_limpiar").addEventListener("click", limpiar);

// Definimos la función limpiar
function limpiar() {
    // Limpiamos el contenido del textarea con el ID "textarea_uno"
    document.getElementById("textarea_uno").value = "";
    // Llamamos a la función actualizarVisibilidad si está definida
    if (typeof actualizarVisibilidad === "function") {
        actualizarVisibilidad();
    }
}
