const toDos = [{
    text: 'learn js',
    complete: true
}, {
    text: 'go out to eat pasta',
    complete: true
}, {
    text: 'need a get a job',
    complete: true
}, {
    text: 'Play Games',
    complete: true
}, {
    text: 'make life colorful',
    complete: false
}]

console.log(toDos)

const deleteTodo = function (todos, textVal) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === textVal.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(toDos, 'Play Games')
console.log(toDos)