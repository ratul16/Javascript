let isValid = function (password){
    if(password.length >= 8 && !password.includes('password') ){
        return true
    }else {
        return false
    }
}

console.log(isValid('absdcs'))
console.log(isValid('absdcs1231243214'))
console.log(isValid('absdc86234password'))

console.log('\nVersion 2 \n')

//! alternate way 

let isValid2 = function (password){
   return password.length >= 8 && !password.includes('password')
}

console.log(isValid2('absdcs'))
console.log(isValid2('absdcs1231243214'))
console.log(isValid2('absdc86234password'))