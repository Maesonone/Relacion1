document.getElementById("trianguloForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert("Por favor, introduce valores numéricos para los lados del triángulo.");
        return;
    }

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Los lados del triángulo deben ser mayores que cero.");
        return;
    }

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert("La suma de dos lados debe ser mayor que el tercero para formar un triángulo.");
        return;
    }

    if (lado1 === lado2 && lado1 === lado3) {
        document.getElementById("resultado").innerText = "Es un triángulo equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        document.getElementById("resultado").innerText = "Es un triángulo isósceles.";
    } else {
        document.getElementById("resultado").innerText = "Es un triángulo escaleno.";
    }
});