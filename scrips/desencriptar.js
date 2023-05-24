//Creamos la funcion para desencriptar usando una expresion regular inversa
function desencriptar(texto) {
  return texto.replace(/(enter|imes|ai|ober|ufat)/g, function (match) {
  return Object.keys(llaves).find(key => llaves[key] === match);
  });
 }
