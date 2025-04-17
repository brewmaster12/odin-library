let myLibrary = []; 
 
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("Lolita", "Nabokov", "400", "not read");
addBookToLibrary("Vineland", "Pynchon", "500", "read");
addBookToLibrary("Suttree", "McCarthy", "350", "not read");
addBookToLibrary("Bible", "God", "1000", "read");
addBookToLibrary("The Hobbit", "Tolkien", "200", "not read");


const table = document.querySelector("table");

function displayBooks() {
    // Clear whatever is currently in the table to start over
    clearTable();
    // Create a row of data for each book in the Library array
    myLibrary.map((book) => {
        const bookRow = document.createElement("tr");
        for (property in book) {
            let entry = document.createElement("td");
            entry.textContent = `${book[property]}`;
            bookRow.appendChild(entry);
        }
        // Remove book functionality
        const removeBookBtn = document.createElement("button");
        removeBookBtn.dataset.id = book.id;
        removeBookBtn.textContent = "Remove book";
        removeBookBtn.addEventListener("click", () => {
            removeThisBook(book.id);
        })
        bookRow.appendChild(removeBookBtn);
        // Append the rows to the table
        table.appendChild(bookRow);
    })
}

displayBooks();

function removeThisBook(idOfBook) {
    let newLibrary = myLibrary.filter((book) => {
        return book.id != idOfBook
    })
    myLibrary = newLibrary;
    displayBooks();
}


// "New Book" functionality 
const dialog = document.querySelector("dialog");

document.getElementById("newBookButton").addEventListener("click", () => {
    dialog.showModal();
})

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function clearTable() {
    while (table.rows.length > 1) {
        let i = 1;
        table.deleteRow(i);
        i++;
    }
}

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    displayBooks();
    dialog.close();
})

