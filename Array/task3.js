const toDos = [{
    text: 'learn js',
    complete: false
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


const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
       return todo.complete === false
    })
}

console.log(getThingsTodo(toDos))