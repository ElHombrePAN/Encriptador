//Creamos otra funcion para contar cuantas palabras encripto
function contarPalabras(texto) {
  let palabras = texto.trim().split(/\s+/);
  let palabrasConLetrasEnLlaves = 0;

  for (let palabra of palabras) {
    if (contieneLetraEnLlaves(palabra)) {
      palabrasConLetrasEnLlaves++;
    }
  }

  return palabrasConLetrasEnLlaves;
}

let contadorPalabras = 0;

//Adicional crearemos otra funcion para validar que la palabra contenga una letra de la llave
function contieneLetraEnLlaves(palabra) {
  for (let letra in llaves) {
    if (palabra.includes(letra)) {
      return true;
    }
  }
  return false;
}