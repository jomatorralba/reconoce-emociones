// script.js
const emocionesPorImagen = {
    "persona1": "alegria",
    "persona2": "tristeza",
    "persona3": "sorpresa",
    "persona4": "enfado",
    "persona5": "asco",
    "persona6": "miedo"
};

var imagenActual = "";

function clasificarEmocion(emocionSeleccionada) {
    var emocionCorrecta = emocionesPorImagen[imagenActual];

    if (emocionSeleccionada === emocionCorrecta) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La emoción correcta era: " + emocionCorrecta);
    }

    // Cambiar la imagen después de seleccionar una emoción
    cambiarImagen();
}

function cambiarImagen() {
    var numeroImagen = Math.floor(Math.random() * 6) + 1;
    imagenActual = "persona" + numeroImagen;

    var imagen = document.getElementById("imagenPersona");
    imagen.src = imagenActual + ".jpg";
}

// Inicializar la primera imagen al cargar la página
window.onload = function() {
    cambiarImagen();
};
