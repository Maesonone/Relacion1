document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("mes");

    fetch("meses.json")
        .then(response => response.json())
        .then(data => {
            data.español.forEach(function(mes, index) {
                var option = document.createElement("option");
                option.value = index + 1;
                option.textContent = mes;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error al obtener el archivo JSON:", error);
        });
});

document.getElementById("mesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var numeroMes = parseInt(document.getElementById("mes").value);

    if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
        alert("Por favor, selecciona un mes válido.");
        return;
    }

    fetch("meses.json")
        .then(response => response.json())
        .then(data => {
            var nombreMesEspañol = data.español[numeroMes - 1];
            var nombreMesInglés = data.inglés[numeroMes - 1];

            var resultadoHTML = `<p>El mes seleccionado en español es: <strong>${nombreMesEspañol}</strong></p>`;
            resultadoHTML += `<p>Su traducción al inglés es: <strong>${nombreMesInglés}</strong></p>`;

            document.getElementById("resultado").innerHTML = resultadoHTML;
        })
        .catch(error => {
            console.error("Error al obtener el archivo JSON:", error);
        });
});