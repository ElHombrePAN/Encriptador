// Obtener los elementos textarea por su id
const textoOriginal = document.getElementById("textoOriginal");
const textoEncriptado = document.getElementById("textoEncriptado");

// Añadir un listener al evento input del textoOriginal
textoOriginal.addEventListener("input", () => {
 // Copiar el valor del textoOriginal al textoEncriptado
 textoEncriptado.value = textoOriginal.value;
 // Llamar a la función mostrarOcultarDivs
 mostrarOcultarDivs();
});

//Ocultar Divs dinamicamente si hay o no hay ningun texto en nuestra area de trabajo
function mostrarOcultarDivs() {
  setTimeout(() => {
    let texto = document.getElementById("textoOriginal").value;
    let divPasivo = document.getElementById("pasivo");
    let divActivo = document.getElementById("activo");
    if (texto == "") {
      // Si el primer textarea está vacío, mostrar el div pasivo y ocultar el div activo
      divPasivo.style.display = "block";
      divActivo.style.display = "none";
    } else {
      // Si el primer textarea tiene algún valor, ocultar el div pasivo y mostrar el div activo
      divPasivo.style.display = "none";
      divActivo.style.display = "block";
    }
  }, 0); // El tiempo de espera es 0 milisegundos
}
