// Función para generar números enteros aleatorios entre min y max (ambos inclusive)
function generarNumerosAleatorios(min, max) {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        let numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numero);
    }
    return numeros;
}

// Obtener referencia al botón y al div donde se mostrarán los números aleatorios
let mostrarNumerosBtn = document.getElementById('mostrarNumerosBtn');
let numerosAleatoriosDiv = document.getElementById('numerosAleatorios');

// Agregar evento click al botón para mostrar los números aleatorios
mostrarNumerosBtn.addEventListener('click', function() {
    // Generar números aleatorios entre 1 y 100
    let numerosGenerados = generarNumerosAleatorios(1, 100);

    // Mostrar los números en pantalla
    let listaNumerosHTML = '<ul>';
    numerosGenerados.forEach(function(numero, indice) {
        listaNumerosHTML += `<li>${indice + 1}. ${numero}</li>`;
    });
    listaNumerosHTML += '</ul>';

    numerosAleatoriosDiv.innerHTML = listaNumerosHTML;
});
