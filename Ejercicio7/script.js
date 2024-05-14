document.getElementById("divisionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var dividendo = parseInt(document.getElementById("dividendo").value);
    var divisor = parseInt(document.getElementById("divisor").value);

    if (isNaN(dividendo) || isNaN(divisor) || dividendo <= 0 || divisor <= 0) {
        alert("Por favor, ingresa números enteros positivos para el dividendo y el divisor.");
        return;
    }

    var cociente = Math.floor(dividendo / divisor);
    var resto = dividendo % divisor;

    var resultadoHTML = `<p>El cociente de la división es: ${cociente}</p>`;
    resultadoHTML += `<p>El resto de la división es: ${resto}</p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
});