const botonCopiar = document.getElementById("copiar");
botonCopiar.addEventListener("click", procesarBotonCopiar);

//Creamos la funcion procesarBotonCopiar para el boton COPIAR
function procesarBotonCopiar() {
    let texto = document.getElementById("textoEncriptado").value.trim();
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