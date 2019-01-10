let tempConver = function(fahrenheit){
    return{
        fahrenheit : fahrenheit,
        celsius : (fahrenheit - 32) * (5 / 9),
        kelvin : (fahrenheit + 459.67) * (5 / 9)
    }
}


let temp = tempConver(50)
console.log(`${temp.fahrenheit} Farhrenheit is ${temp.celsius} Celsius and ${temp.kelvin} Kelvin`)

