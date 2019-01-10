const todos = [{
    text: 'learn js',
    complete: true
}, {
    text: 'go out to eat pasta',
    complete: true
}, {
    text: 'need a get a job',
    complete: false
}, {
    text: 'Play Games',
    complete: true
}, {
    text: 'make life colorful',
    complete: false
}]

const sortTodo = function (todos) {
    todos.sort(function(a,b){
        if(a.complete == true && b.complete == false){
            return 1
        } else if (a.complete == false && b.complete == true) {
            return -1
        }else {
            return 0
        }
    })
}

sortTodo(todos)
console.log(todos)