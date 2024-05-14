const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.getElementById("mesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var numeroMes = parseInt(document.getElementById("mes").value);

    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        alert("Por favor, selecciona un mes válido.");
        return;
    }

    var nombreMes = meses[numeroMes - 1];

    var resultadoHTML = `<p>El mes seleccionado es: <strong>${nombreMes}</strong></p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
});