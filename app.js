// Activate & de-activate the add ui

let inputContainer = document.querySelector('.add-container');
let activateUiBtn = document.querySelector('#activate-container');
activateUiBtn.addEventListener('click', addActivate);
function addActivate() {
    if (inputContainer.style.display != 'none') {
        inputContainer.style.display = 'none';
    }
    else if (inputContainer.style.display = 'none') {
        inputContainer.style.display = '';
    }
}

// Core objects & functions

let submit = document.getElementById('submit-button');
submit.addEventListener('click', addBookToLibrary);

let myLibrary = [];

function Book(title, author, pages, read, indexNumber) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.indexNumber = indexNumber;
}

let titleBox = document.getElementById('title-box');
let authorBox = document.getElementById('author-box');
let pagesBox = document.getElementById('pages-box');
let checkBox = document.getElementById('checkbox');
function addBookToLibrary() {
    if (titleBox.value != "" && authorBox.value != "" && pagesBox.value != "" && checkBox.checked != true) {
        let indexNumber = parseInt(myLibrary.length) + 1;
        let newBook = new Book(titleBox.value, authorBox.value, pagesBox.value, false, indexNumber);
        myLibrary.push(newBook);
        render()
    }
    else if (titleBox.value != "" && authorBox.value != "" && pagesBox.value != "" && checkBox.checked) {
        let newBook = new Book(titleBox.value, authorBox.value, pagesBox.value, true);
        myLibrary.push(newBook);
        render()
    }
    else {
        alert('empty field')
    }

}

// Rendering function

function render() {
    let newDiv = document.createElement('div');
    let newTitle = document.createElement('p');
    let newAuthor = document.createElement('p');
    let newPages = document.createElement('p');
    let newRead = document.createElement('button');
    let newDelete = document.createElement('button');

    newDiv.classList.add('book-item');
    newTitle.classList.add('book-title');
    newAuthor.classList.add('book-author');
    newPages.classList.add('book-pages');
    newRead.classList.add('book-read');
    newDelete.classList.add('book-delete');


    for (let i = 0; i < myLibrary.length; i++) {
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = "by " + myLibrary[i].author;
        newPages.textContent = myLibrary[i].pages + " pgs";
        newDelete.innerText = 'Delete';
        if (myLibrary[i].read === true) {
            newRead.innerText = 'Read';
        }
        else {
            newRead.innerText = 'Not read';
        }
    }

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newPages);
    newDiv.appendChild(newRead);
    newDiv.appendChild(newDelete);

    let itemList = document.querySelector('.item-list');
    itemList.appendChild(newDiv);

    assignDelete()
}

// Remove function
let removeBtn = document.getElementsByClassName("book-delete");
function assignDelete() {
    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', remove);
    }
};

function remove(e) {
    let parentBook;
    parentBook = e.target.parentElement;
    parentBook.remove();
}


// Test value
let book1 = new Book('Lord of the Rings', 'J.R.R. Tolkien', 984, false, myLibrary.length + 1);
myLibrary.push(book1);
render();