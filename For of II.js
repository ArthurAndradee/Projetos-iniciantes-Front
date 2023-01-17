const numbers = [2,4,8,16,32,64,128,256,512,1024,2048];

let sum = 0

for (let num of numbers) {
    sum += num;
}

console.log("Soma: " + sum)

console.log("Média: " + sum / numbers.length)