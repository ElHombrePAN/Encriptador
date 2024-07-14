//Se define un objeto con las claves proporcioandas para el encriptador
const llaves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

//Se seleccionan elementos de DOM por ID
const textareaUno = document.getElementById("textarea_uno");
const textareaDos = document.getElementById("textarea_dos");
const btnEncriptar = document.getElementById("btn_encriptar");
const btnDesencriptar = document.getElementById("btn_desencriptar");
const btnLimpiar = document.getElementById("btn_limpiar");

//Funcion para encrptar usando Regex
function encriptar(texto) {
    return texto.replace(/[aeiou]/g, match => llaves[match]);
}

//Funcion para desencriptar usando Regex
function desencriptar(texto) {
    return texto.replace(/(enter|imes|ai|ober|ufat)/g, match =>
        Object.keys(llaves).find(key => llaves[key] === match)
    );
}

//Funcion para procesar el texto ya sea Encriptar o Desencriptar
function procesar(texto, accion) {
    if (texto.trim() === "") {
        console.log("No ingresaste ningún texto"); // Usando console.log en lo que estan listas las notificaciones
        mostrarNotificacion();
        mostrarNotificacion("No ingresaste ningún texto");
        return "";
    } else
    return accion === "encriptar" ? encriptar(texto) : desencriptar(texto);
}

//Se agrega la funcion para el parametro accion y pueda elegir que hacer
function manejarProceso(accion) {
    const texto = textareaUno.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const resultado = procesar(texto, accion);

    if (resultado) {
        textareaDos.value = resultado;
        textareaDos.disabled = false; //Probablemente no necesario por la funcion de visibilidad. pensare que hacer

        // Generar mensaje adecuado basado en la acción
        let mensaje = accion === "encriptar" ? "Texto encriptado correctamente" : "Texto desencriptado correctamente";
        console.log(mensaje); // Solo para usar console.log en lo que estan las notificaciones
        mostrarNotificacion(mensaje);
    }
}

//Detectar el evento para usar la funcion de actualizar visibilidad
textareaUno.addEventListener("input", () => {
    textareaDos.value = textareaUno.value;
    actualizarVisibilidad();
});

btnEncriptar.addEventListener("click", () => manejarProceso("encriptar"));
btnDesencriptar.addEventListener("click", () => manejarProceso("desencriptar"));
btnLimpiar.addEventListener("click", () => {
    textareaUno.value = "";
    textareaDos.value = "";
    actualizarVisibilidad();
    mostrarNotificacion("Limpieza realizada"); //Aun en beta no se agrega al repositorio.
});
