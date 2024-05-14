document.getElementById("circunferenciaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var radio = parseFloat(document.getElementById("radio").value);

    var longitud = 2 * Math.PI * radio;
    var area = Math.PI * radio * radio;
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    var resultadosHTML = `
        <h2>Resultados:</h2>
        <p>Longitud de la circunferencia: ${longitud.toFixed(2)}</p>
        <p>Área del círculo: ${area.toFixed(2)}</p>
        <p>Volumen de la esfera: ${volumen.toFixed(2)}</p>
    `;

    document.getElementById("resultados").innerHTML = resultadosHTML;
});