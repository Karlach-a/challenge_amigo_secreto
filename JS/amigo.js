document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombreInput');
    const agregarNombreBtn = document.getElementById('agregarNombre');
    const listaNombres = document.getElementById('listaNombres');
    const sorteoBtn = document.getElementById('sorteoBtn');
    const resultado = document.getElementById('resultado');
    let nombres = [];

    agregarNombreBtn.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (nombres.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        nombres.push(nombre);
        nombreInput.value = "";

        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });

    sorteoBtn.addEventListener('click', () => {
        if (nombres.length < 2) {
            alert("Debes agregar al menos dos nombres para realizar el sorteo.");
            return;
        }

        const amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];
        resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    });
});