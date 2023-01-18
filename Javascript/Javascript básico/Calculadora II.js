let firstNumber = 5
let secondNumber = 5
let result = 0

function soma(firstNumber,secondNumber) {
    result = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${result}`);
}
function subtracao(firstNumber,secondNumber) {
    result = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber} = ${result}`);
}
function multiplicacao(firstNumber,secondNumber) {
    result = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber} = ${result}`);
}
function divisao(firstNumber,secondNumber) {
    result = firstNumber / secondNumber;
    console.log(`${firstNumber} / ${secondNumber} = ${result}`);
}

let resposta = divisao(100,10)
console.log(resposta)
