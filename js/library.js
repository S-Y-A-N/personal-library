// DOM & Event Handlers
const addButton = document.getElementById('add');
const addDialog = document.getElementById('addDialog');
const closeDialog = document.getElementById('closeDialog');
const submit = document.getElementById('submit');
const libraryContainer = document.getElementById('library-container')

addButton.addEventListener('click', () => addDialog.showModal());
closeDialog.addEventListener('click', () => addDialog.close());
submit.addEventListener('click', addBookToLibrary)

// Books Array
const myLibrary = [];

// Book objects Constructor
function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status ? 'Read' : 'Not Read';
}

function addBookToLibrary() {
    let title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    status = document.getElementById('read').checked;
    let book = new Book(title, author, status);
    myLibrary.push(book);
    displayBook(myLibrary[myLibrary.length - 1]);
}

function displayBook(book) {
        const cards = document.createElement('div')
        const labels = document.createElement('div')
        const info = document.createElement('div')

        for (const key in book) {
            if (Object.hasOwnProperty.call(book, key)) {
                const label = document.createElement('div')
                label.textContent = `${key}`
                labels.appendChild(label);
            }
        }

        for (let key in book) {
            if (Object.hasOwnProperty.call(book, key)) {
                const content = document.createElement('div')
                content.textContent = `${book[key]}`
                info.appendChild(content);
            }
        }

        cards.appendChild(labels)
        cards.appendChild(info)

        libraryContainer.appendChild(cards)
}

// Pre-defined books

const book1 = new Book('Akatsuki no Yona', 'Mizuho Kusanagi', true)
const book2 = new Book('Naruto: Shippuden', 'Masashi Kishimoto', true)
const book3 = new Book('Yagate Kimi ni Naru', 'Nakatani Nio', true)
myLibrary.push(book1, book2, book3)
myLibrary.forEach(book => displayBook(book))