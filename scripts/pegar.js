const pegar = document.getElementById("btn_pegar");

pegar.addEventListener("click", (event) => {
    event.preventDefault();

    navigator.clipboard.readText()
        .then((texto) => {
            document.getElementById("textarea_uno").value = texto;
            outputTextoEncriptado.value = texto; //Variable definida en visibilidad.js
            actualizarVisibilidad(); //llamando funcion
            mostrarNotificacion("Texto copiado correctamente");
        })
        .catch((error) => {
            console.error("Error al pegar el texto: " + error);
        });
});