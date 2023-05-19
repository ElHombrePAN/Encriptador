//creamos un objeto con las llaves proporcionadas en el desafio
const llaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

//Creamos la funcion encriptar usando expresiones regulares con el modificador global
function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function (match) {
    return llaves[match];
  });
}
