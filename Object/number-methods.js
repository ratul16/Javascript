let num = 103.8834534

//number of decimal place in a number
console.log(num.toFixed(2))

// Math Operator
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min =0
let max =20
let randomNum = Math.floor(Math.random()* (max-min + 1)) + min
console.log(randomNum)