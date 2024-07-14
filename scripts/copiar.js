const botonCopiar = document.getElementById("btn_copiar");

botonCopiar.addEventListener("click", () => {
    const texto = document.getElementById("textarea_dos").value.trim();

    if (texto === "") {
        mostrarNotificacion("El campo estqa vacio")
        return;
    }

    navigator.clipboard.writeText(texto)
        .then(() => {
            mostrarNotificacion("Texto copiado");
        })
        .catch((error) => {
            mostrarNotificacion("Error al copiar el texto")
            console.error("Error al copiar el texto: " + error);
        });
});
//Usando promesas en lugar de If-else