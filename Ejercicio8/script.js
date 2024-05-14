function calcularMCD(numero1, numero2) {
    while (numero2 !== 0) {
        var temp = numero2;
        numero2 = numero1 % numero2;
        numero1 = temp;
    }
    return numero1;
}

document.getElementById("mcdForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        alert("Por favor, ingresa números enteros positivos para los dos números.");
        return;
    }

    var mcd = calcularMCD(numero1, numero2);

    var resultadoHTML = `<p>El Máximo Común Divisor (MCD) de ${numero1} y ${numero2} es: ${mcd}</p>`;

    document.getElementById("resultado").innerHTML = resultadoHTML;
});