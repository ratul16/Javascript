let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return{
        summary : `${book.title} by ${book.author}`,
        pageCount: `${book.title} is ${book.pageCount} pages long`
    }

    //console.log(`${book.title} by ${book.author}`)
}


let bookSummary= getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCount)
