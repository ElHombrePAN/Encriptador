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

    let contadorPalabras = 0;

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
            alert("No ingresaste ningún texto");
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
            btnLimpiar.disabled = false;
            if (accion === "encriptar") {
                contadorPalabras += contarPalabras(texto);
                alert(`Texto encriptado correctamente. Palabras encriptadas: ${contadorPalabras}`);
            } else {
                alert("Texto desencriptado correctamente");
            }
        }
    }

    function contarPalabras(texto) {
        return texto.split(/\s+/).filter(Boolean).length;
    }

    function actualizarBotones() {
        const texto = textareaUno.value.trim();
        const hayTexto = texto.length > 0;
        btnEncriptar.disabled = !hayTexto;
        btnDesencriptar.disabled = !hayTexto;
        btnLimpiar.disabled = !hayTexto && textareaDos.value.trim().length === 0;
    }

    textareaUno.addEventListener("input", actualizarBotones);
    btnEncriptar.addEventListener("click", () => manejarProceso("encriptar"));
    btnDesencriptar.addEventListener("click", () => manejarProceso("desencriptar"));
    btnLimpiar.addEventListener("click", () => {
        textareaUno.value = "";
        textareaDos.value = "";
        actualizarBotones();
    });
});

