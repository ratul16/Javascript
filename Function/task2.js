
let getTip = function(total , tipPrecent = .25) {
    let tipValue = total * tipPrecent
    return `A ${tipPrecent*100}% tip on $${total} would be $${tipValue}` 
    //return + total * tipPrecent
}

let result1 = getTip (60)
console.log (result1)
