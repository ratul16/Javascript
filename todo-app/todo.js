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


const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filterTodo = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    //seacrhing for the completed todos
    const incomplete =filterTodo.filter(function (todos) {
        return !todos.complete
    })

    const left = document.createElement('h2')
    left.textContent = `Todo's left : ${incomplete.length}`
    document.querySelector('#todos').appendChild(left)

    //loopint through the array object and print them in the html page
    filterTodo.forEach(function (todos) {
        const todo = document.createElement('h3')
        todo.textContent = todos.text
        document.querySelector('#todos').appendChild(todo)

    })

    

    
}

renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#form-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.addTodo.value)
    todos.push({
        text: e.target.elements.addTodo.value,
        value : false
    })

    renderTodos(todos,filters)

    e.target.elements.addTodo.value = ''
})

