let array = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]
let string  = array.toString()
let tel = 
console.log(string.replace(/(\d{2})-(\d{5})-(\d{4})/, '($1)$2-$3'))