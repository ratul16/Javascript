const toDo = [{

    title:'Trip',
    body:'go to cox bazar',

},{

    title: 'Hobby',
    body: 'coding toDo',

},{

    title: 'Lunch',
    body: 'need to eat vegi',

}]

//find function
const findTodo = function (toDo,noteTitle) {
    return index = toDo.find(function (note,index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const search = findTodo(toDo, 'Hobby')
console.log(search)


//findIndex funtion

const findTodo = function (toDo, noteTitle) {
    const index = toDo.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return toDo[index]
}

const search = findTodo(toDo,'Hobby')
console.log(search)



const index = toDo.findIndex(function (toDo,index) {
    console.log(toDo)
    return toDo.title === 'Lunch'
})

console.log(index)

