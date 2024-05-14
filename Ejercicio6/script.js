document.getElementById("palindromoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var cadena = document.getElementById("cadena").value;

    if (!cadena) {
        alert("Por favor, ingresa una cadena de caracteres.");
        return;
    }

    cadena = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

    var inversa = cadena.split("").reverse().join("");

    if (cadena === inversa) {
        document.getElementById("resultado").innerHTML = "<p>La cadena es un palíndromo.</p>";
    } else {
        var palindromo = cadena + inversa;
        document.getElementById("resultado").innerHTML = `<p>La cadena no es un palíndromo. El palíndromo correspondiente es: <strong>${palindromo}</strong></p>`;
    }
});