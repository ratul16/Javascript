//* Global scope (tempconversion, tem1,temp2)
//* local scope (fahrenheit, celsius)
//* local scope (is Freezing)

let tempconversion = function (fahrenheit) {
        let celsius = (fahrenheit - 32) * (5 / 9)

        if (celsius <= 0) {
                let isFreezing = true
        }

        return celsius
}

let temp1 = tempconversion(32)
let temp2 = tempconversion(68)

console.log(temp1)
console.log(temp2)