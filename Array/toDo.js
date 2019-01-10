const toDo = ['learn js','go out to eat pasta','need a get a job','play games','make life colorful']

console.log(`You have ${toDo.length} things to do`)
console.log(toDo[0])
console.log(toDo[toDo.length-2])

//forEach
console.log(`You have ${toDo.length} things to do`)
toDo.forEach(function (item,index){
    console.log(`${index+1}. ${item}`)
})

//for-loop

for (let i = 0;i < toDo.length; i++) {
    const num = i + 1;
    const list = toDo[i]
    console.log(`${num}. ${list}`)
}

for (let i = toDo.length - 1; i >= 0; i--) {
    const num = i+1;
    const list = toDo[i]
    console.log(`${num}. ${list}`)

}
