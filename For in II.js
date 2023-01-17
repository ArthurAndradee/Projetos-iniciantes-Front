const notas = {
    bimestre1: 7.8,
    bimestre2: 3.3,
    bimestre3: 6.4,
    bimestre4: 8.6,
};

let soma = 0;
let contagem = 0;

for (let bimestre in notas) {
    contagem +=1;
    soma += notas[bimestre]
}

console.log("Soma: " + soma)
console.log("Length: " + contagem)

let media = soma / contagem;

if (media >=7) {
    console.log ("Aluno foi aprovado")
} else {
    console.log ("Aluno foi reprovado com a nota de: " + media)
}