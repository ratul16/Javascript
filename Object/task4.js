let makeGuess = function (number){
     let max = 5
     let min = 1
     let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
     console.log(randomNum)
    return randomNum === number
    
}

console.log(makeGuess(2))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
