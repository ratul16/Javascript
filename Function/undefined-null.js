//* Undefined for variable 

let name 

name = 'jen'

if (name ===undefined){
    console.log('Please enter a name')
}else {
    console.log(name)
}

//* Undefined for function argument 
//* Undefined as the fucntion return default value

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// * Null as assigned value
let age = 27

age = null

console.log(age)