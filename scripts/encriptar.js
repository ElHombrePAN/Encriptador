document.addEventListener("DOMContentLoaded", function() {
    const llaves = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    const textareaUno = document.getElementById("textarea_uno");
    const textareaDos = document.getElementById("textarea_dos");
    const btnEncriptar = document.getElementById("btn_encriptar");
    const btnDesencriptar = document.getElementById("btn_desencriptar");
    const btnLimpiar = document.getElementById("btn_limpiar");

    function encriptar(texto) {
        return texto.replace(/[aeiou]/g, match => llaves[match]);
    }

    function desencriptar(texto) {
        return texto.replace(/(enter|imes|ai|ober|ufat)/g, match =>
            Object.keys(llaves).find(key => llaves[key] === match)
        );
    }

    function procesar(texto, accion) {
        if (texto.trim() === "") {
            console.log("No ingresaste ningún texto"); // Reemplazar alert con console.log por ahora
            return "";
        }
        return accion === "encriptar" ? encriptar(texto) : desencriptar(texto);
    }

    function manejarProceso(accion) {
        const texto = textareaUno.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const resultado = procesar(texto, accion);

        if (resultado) {
            textareaDos.value = resultado;
            textareaDos.disabled = false;
            console.log(`Texto ${accion}ado correctamente`); // Reemplazar alert con console.log por ahora
        }
    }

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
    });
});