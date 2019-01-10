const note = ['note 1', 'note 2', 'note 3', 'note 4', 'note 5', 'note 6']

console.log(note)
console.log(note.length)

//push to add items
note.push('User notes')
console.log(note)
console.log(note.length)

//pop to remove items pop also returns the removed value
note.pop()
console.log(note)
console.log(note.length)

console.log(note.pop())
note.push('hello')
console.log(note)
console.log(note.length)

// Shift removes the 1 item from the array and unshift adds an item at1st of the array

console.log(note.shift())
console.log(note)

console.log(note.unshift('demo'))
console.log(note)

//splice is used to add and remove items to the middle of the array //#endregion
console.log(note.splice(1,1, 'using splice to add values to array'))
console.log(note)

//assigning value //#endregion
note[2]='hello world'
console.log(note)