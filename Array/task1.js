const toDo = ['learn js', 'go out to eat pasta', 'need a get a job', 'play games', 'make life colorful']

console.log(`You have ${toDo.length} things to do`)
console.log(toDo[0])
console.log(toDo[toDo.length - 2])

toDo.splice(2,1)
toDo.push('need peace of mind')
toDo.shift()
console.log(toDo)
