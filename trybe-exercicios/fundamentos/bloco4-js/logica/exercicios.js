// 1
let fatorial = 1

for (let index = 1; index <= 10; index += 1) {
    fatorial = index * fatorial
}
console.log(fatorial);

// 2
let word = 'yuuki';
let invertida = ""

for (let index = word.length -1; index >= 0; index -= 1) {
    invertida += word[index]
}
console.log(invertida);

// 3 x
let array = ['java', 'javascript', 'python', 'html', 'css'];
let tamanho = []

function sort(a, b) {
    return (a - b)
}

for (word of array) {
    tamanho.push(word.length)
    tamanho.sort(sort)
}
console.log(tamanho[tamanho.length-1])
console.log(tamanho[0])


// 4
let primo = []
let impar = []
let divisor =
for (let index = 3; index < 50; index += 1) {
    if (index % 2 !== 0) {
        impar.push(index)
    }
}
for (let indice = 0; indice < impar.length; indice +=1) {
    for (divisor = 1; divisor <= impar[indice]; divisor += 1){
        if (impar[indice] % divisor === 0) {
            divisor += 1
        }
        if (divisor === 2) {
            primo.push(impar[indice])
        }
    }
}
console.log(primo.length - 1)