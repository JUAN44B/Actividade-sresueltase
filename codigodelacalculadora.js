var numberOne = document.getElementById("num1");
var numberTwo = document.getElementById("num2");
var numbertree = document.getElementById("num3");
var resultado = document.getElementById("resultadoInput");

function divisionDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var numtree = parseInt(numbertree.value);
    var division = (numOne) / (numTwo) / (numtree);
    resultado.value = division;
}

function restaDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var numtree = parseInt(numbertree.value);
    var resta = numOne - numTwo - numtree;
    resultado.value = resta;
}

function multiplicacionDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var numtree = parseInt(numbertree.value);
    var multiplicacion = numOne * numTwo * numtree;
    resultado.value = multiplicacion;
}

function sumaDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var numtree = parseInt(numbertree.value);
    var suma = numOne + numTwo + numtree;
    resultado.value = suma;
}

function potenciaDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var numtree = parseInt(numbertree.value);
    var potencia = numOne ** numTwo ** numtree;
    resultado.value = potencia;
}

function porcentajeDosNumeros() {
    var numOne = parseInt(numberOne.value);
    var numTwo = parseInt(numberTwo.value);
    var porcentaje = (numTwo / 100) * numOne;
    resultado.value = porcentaje;
}
