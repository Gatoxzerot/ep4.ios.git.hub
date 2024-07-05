// Arreglo inicial de frutas
let frutas = ["Manzana", "Naranja", "Plátano", "Fresa", "Uva"];

// Función para mostrar las frutas actuales
function verFrutas() {
    mostrarResultado(`Frutas actuales: ${frutas.join(', ')}`);
}

// Función para ordenar las frutas alfabéticamente
function ordenarFrutas() {
    frutas.sort();
    mostrarResultado(`Frutas ordenadas: ${frutas.join(', ')}`);
}

// Función para invertir el orden de las frutas
function invertirFrutas() {
    frutas.reverse();
    mostrarResultado(`Frutas invertidas: ${frutas.join(', ')}`);
}

// Función para mostrar la longitud del arreglo de frutas
function longitudFrutas() {
    mostrarResultado(`Longitud del arreglo de frutas: ${frutas.length}`);
}

// Función para insertar una fruta al final del arreglo
function insertarFruta() {
    let nuevaFruta = prompt("Ingrese el nombre de la nueva fruta:");
    if (nuevaFruta) {
        frutas.push(nuevaFruta);
        mostrarResultado(`Fruta insertada. Frutas actuales: ${frutas.join(', ')}`);
    }
}

// Función para eliminar la última fruta del arreglo
function eliminarFruta() {
    if (frutas.length === 0) {
        mostrarResultado(`No hay frutas para eliminar.`);
    } else {
        let frutaEliminada = frutas.pop();
        mostrarResultado(`Fruta eliminada: ${frutaEliminada}. Frutas actuales: ${frutas.join(', ')}`);
    }
}

// Función auxiliar para mostrar resultados en el div 'resultado'
function mostrarResultado(mensaje) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = mensaje;
}
