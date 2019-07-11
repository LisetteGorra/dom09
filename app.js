const wmf = document.querySelector('#book-list li:nth-child(2).name');
console.log(wmf);
var books = document.querySelector('#book-listi.name');
//  console.log(books);
books = document.querySelectorAll('#book-listi.name');
// console.log(books);
Array.from(books).forEach(function(book){
        console.log(book);

})

// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

// console.log(search, bookList);

// var title = document.getElementsByClassName('title');
// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));

// Array.from(title).forEach(function(item){
//     console.log(item);
// }