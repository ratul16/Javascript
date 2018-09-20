
let tempconversion = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9)
    return celsius
}

let temp1 = tempconversion (32)
let temp2 = tempconversion (68)

console.log(temp1)
console.log(temp2)