//creando el boton pegar aprendiendo el evento click Obtenemos el botón de pegar usando el método getElementById
const pegar = document.getElementById("pegar");
//Asignamos un evento click al botón de pegar
pegar.addEventListener("click", function (event) {
  event.preventDefault();
  //Usamos el objeto navigator.clipboard para acceder al portapapeles
  navigator.clipboard
    .readText()
    .then((texto) => {
      //Asignamos el texto del portapapeles al valor de la textarea que queramos
      document.getElementById("textoOriginal").value = texto;
      //Llamamos a la función mostrarOcultarDivs para activar la segunda textarea
      mostrarOcultarDivs();
      //Mostramos una notificación indicando que se ha pegado el texto
      mostrarNotificacion("Texto pegado correctamente");
    })
    .catch((error) => {
      //Mostramos una notificación indicando que hubo un error al pegar el texto
      mostrarNotificacion("Error al pegar el texto: " + error);
    });
});