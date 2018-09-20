let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 30, 60)
console.log(result)

//* Default arguments 

let getScoreText  = function (name = 'Anonymous', score = 0){
    return `Name : ${name} ---- Score : ${score} `
    //return 'Name : ' + name + ' -Score: ' + score 
}

let scoreText = getScoreText(undefined,100)
console.log(scoreText)