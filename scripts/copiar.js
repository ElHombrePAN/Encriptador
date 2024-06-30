const botonCopiar = document.getElementById("btn_copiar");

botonCopiar.addEventListener("click", () => {
    const texto = document.getElementById("textarea_dos").value.trim();

    if (texto === "") return;

    navigator.clipboard.writeText(texto)
        .catch((error) => {
            console.error("Error al copiar el texto: " + error);
        });
});
//Usando promesas en lugar de If-else