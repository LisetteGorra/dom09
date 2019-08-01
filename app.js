document.addEventListener('DOMContentLoaded', function(){
    
})


const list = document.querySelector('#todo-list ul');

const forms = document.forms;

// delete todos
list.addEventListener('click', (e) => {
  if(e.target.className == 'complete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add todos
const addForm = forms['add-todo'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const completeBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  completeBtn.textContent = 'complete';

  // add classes
  bookName.classList.add('name');
  completeBtn.classList.add('comptolete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(completeBtn);
  list.appendChild(li);
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
const searchBar = forms['search-list'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const todos = list.getElementsByTagName('li');
  Array.from(todos).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});


//tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            }else {
                panel.classList.remove('active');
            }
        })
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
