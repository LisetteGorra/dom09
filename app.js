const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click', function(e){
if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
}

});

//add book-list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text" ]').value;
    console.log(value);


    //hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display= "none";
    } else{
        list.style.display = "initial";
    }
    
});


    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn = document.createElement('span');


    //add content
    deletebtn.textContent = 'delete';
    bookName.textContent = value;


    //add classes
    bookName.classList.add('name');
    deletebtn.classList.add('delete');


    //append to document
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);

});









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
