const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes,text) {
    return notes.filter(function (note, index) {
        const title = note.title.toLowerCase().includes(text.toLowerCase())
        const body = note.body.toLowerCase().includes(text.toLowerCase())
        return title || body
    })

}


console.log(findNote(notes,'eating'))

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }


// console.log(notes)