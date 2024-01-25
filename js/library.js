const myLibrary = [];

// Book objects Constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    
    return new Book(title, author, pages, isRead);
}

function displayBooks() {

}


// DOM & Event Handlers
const addButton = document.getElementById('add');
const addDialog = document.getElementById('addDialog')
const closeDialog = document.getElementById('closeDialog')

addButton.addEventListener('click', () => addDialog.showModal());
closeDialog.addEventListener('click', () => addDialog.close());