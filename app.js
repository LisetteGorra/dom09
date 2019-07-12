const bookList = document.querySelector('#book-list');

console.log("the parent node is:", bookList.parentNode);
console.log("the parent element is:", bookList.parentElement.parentElement);
console.log(bookList.children);





// var books = document.querySelectorAll('book-list li.name');

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';
