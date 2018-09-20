//* Lexical Scope (static scope)
//* Global scope - defined outside of all code blocks
//* Local scope -Define inside a code block

//! in a scope you can access variables defiend in that scope, or in any parent/and ancestor scope

//* gobal scope (varOne)
    //* local scope (varTwo)
      //* local scope (varFour)
    //* local scope (varThree)


let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo' 
    console.log(varTwo)
}

console.log(varTwo)
    if(true){
        let varFour = 'varFour'
    }

if(true){
    let varThree = 'varThree'
}

