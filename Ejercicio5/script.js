document.getElementById("cadenaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var cadena = document.getElementById("cadena").value;

    if (!/[a-zA-Z]/.test(cadena)) {
        alert("La cadena debe contener al menos una letra.");
        return;
    }

    var resultadoHTML;
    if (cadena === cadena.toUpperCase()) {
        resultadoHTML = "<p>La cadena está en mayúsculas.</p>";
    } else if (cadena === cadena.toLowerCase()) {
        resultadoHTML = "<p>La cadena está en minúsculas.</p>";
    } else {
        resultadoHTML = "<p>La cadena no está completamente en mayúsculas ni en minúsculas.</p>";
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
});