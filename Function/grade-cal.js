//* student score , total possible score 
//* 15/20 -> You got a C (75%)
//* A 90-100, B 80_89, C 70-79, D 60-69,F 0-59

let gradeCal = function (studentScore, totalScore) {
    let precent = (studentScore / totalScore) * 100
    let letterGrade = ''
    if (precent >= 90) {

        letterGrade = 'A'

    } else if (precent >= 80) {

        letterGrade = 'B'

    } else if (precent >= 70) {

        letterGrade = 'C'

    } else if (precent >= 60) {

        letterGrade = 'D'

    } else {

        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${precent}%)!`
}

let result = gradeCal(17, 20)
console.log(result)