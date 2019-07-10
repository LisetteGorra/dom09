const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);

var title = document.getElementsByClassName('title');
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(title).forEach(function(item){
    console.log(item);
})