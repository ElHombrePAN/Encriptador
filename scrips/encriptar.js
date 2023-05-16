//Creamos la funcion encriptar usando expresiones regulares con el modificador global
function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function (match) {
    return llaves[match];
  });
}
