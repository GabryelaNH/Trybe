// 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index])
}
// 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0  

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]
}

console.log(soma)
// 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0  
let mediaAri

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]
    mediaAri = soma / numbers.length
}

console.log(mediaAri)
// 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0  
let mediaAri

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]
    mediaAri = soma / numbers.length
}
 if (mediaAri > 20) {
    console.log("valor maior que 20")
 } else {
    console.log("valor menor ou igual a 20")
 }
// 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] === Math.max([5, 9, 3, 19, 70, 8, 100, 2, 35, 27])){
        console.log(numbers)
    } 
}
console.log(Math.max(max))