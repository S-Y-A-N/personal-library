// DOM elements & Event Handlers

const addButton = document.getElementById('add');
const addDialog = document.getElementById('addDialog');
const closeDialog = document.getElementById('closeDialog');
const submit = document.getElementById('submit');

const libraryContainer = document.getElementById('library-container')

let title = document.getElementById('title');
let author = document.getElementById('author');
let readStatus = document.getElementById('read');

addButton.addEventListener('click', () => addDialog.showModal());
closeDialog.addEventListener('click', () => addDialog.close());
submit.addEventListener('click', addBookToLibrary);

// Books Array
const myLibrary = [];
let i = 0;

// Book objects Constructor
function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary(event) {
    if(title.value === '' || author.value === '')
        event.preventDefault();
    else {
        let book = new Book(title.value, author.value, readStatus.checked);
        myLibrary.push(book);
        displayBook(myLibrary[myLibrary.length - 1]);
    }
}

function displayBook(book) {
        const info = document.createElement('div')

        for (let key in book) {
            if (Object.hasOwnProperty.call(book, key)) {
                let content = document.createElement('div')
                switch (key) {
                    case 'title':
                        content.textContent = `${book[key]}`
                        break;
                    case 'author':
                        content.textContent = `by ${book[key]}`
                        break;
                    case 'readStatus':
                        content = document.createElement('button')
                        content.textContent = book[key] ? 'Read' : 'Not Read';
                        content.classList.add('read-toggle')
                        content.addEventListener('click', toggleRead)
                        break;
                }
                info.appendChild(content);
            }
        }

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete')
        deleteBtn.addEventListener('click', deleteBook)
        info.appendChild(deleteBtn)
        info.setAttribute('data-index', i)
        i++;

        libraryContainer.appendChild(info)
}

// Pre-defined books

const book1 = new Book('Akatsuki no Yona', 'Kusanagi Mizuho', false)
const book2 = new Book('Naruto: Shippuden', 'Kishimoto Masashi', true)
const book3 = new Book('Hunter x Hunter', 'Yoshihiro Togashi', true)
myLibrary.push(book1, book2, book3)
myLibrary.forEach(book => displayBook(book))

// DOM | Read Toggle & Delete

function toggleRead() {
    const index = this.parentNode.getAttribute('data-index')
    let status = myLibrary[index].readStatus = !(myLibrary[index].readStatus);
    this.textContent = status ? 'Read' : 'Not Read';
}

function deleteBook() {
    const index = this.parentNode.getAttribute('data-index')
    if(confirm(`Are you sure you want to delete ${myLibrary[index].title}?`)) {
        delete myLibrary[index];
        this.parentNode.remove();
    }
}
