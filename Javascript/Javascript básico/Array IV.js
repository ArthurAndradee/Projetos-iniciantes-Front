const numeros = {
    numero1: 7.8,
    numero2: 3.3,
    numero3: 6.4,
    numero4: 8.6,
};

let soma = 0;
let contagem = 0;

for (let numero in numeros) {
    contagem +=1;
    soma += numeros[numero]
}

let media = soma / contagem;

console.log ("A média é de: " + media)