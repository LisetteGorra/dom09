const list = document.querySelector.('#ook-list ul');

//delete books
list.addEventListener('click', function(e){
if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.moveChild(li);
}

})






// var btns = document.querySelectorAll('#book-list  .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log( 'navigation to', e.target.textContent, 'was prevented');
// });


// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:', bookList.nextSibling );
// console.log('book-list next element sibling is:', bookList.nextElementSibling );

// console.log('book-list previous sibling is:', bookList.previousSibling );
// console.log('book-list previous element sibling is:', bookList.previousElementSibling );

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too cool for everyone else!'; 


// const bookList = document.querySelector('#book-list');

// console.log("the parent node is:", bookList.parentNode);
// console.log("the parent element is:", bookList.parentElement.parentElement);
// console.log(bookList.children);





// var books = document.querySelectorAll('book-list li.name');

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';
