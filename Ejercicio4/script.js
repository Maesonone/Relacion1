document.getElementById("dniForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var dni = document.getElementById("dni").value;

    if (dni.length !== 7 && dni.length !== 8) {
        alert("El número de DNI debe tener 7 u 8 dígitos.");
        return;
    }

    if (!(/^\d+$/.test(dni))) {
        alert("El número de DNI debe ser un número entero.");
        return;
    }

    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var posicion = dni % 23;
    var letra = letras.charAt(posicion);

    var resultadoHTML = `<p>La letra del DNI ${dni} es: <strong>${letra}</strong></p>`;
    document.getElementById("resultado").innerHTML = resultadoHTML;
});