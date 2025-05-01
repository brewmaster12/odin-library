let myLibrary = []; 
 

class Book {
    constructor(title, author, pages, read) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        }
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    changeReadStatus() {
        if (this.read === "read") {
            this.read = "not read"
        } else if (this.read === "not read") {
            this.read = "read"
        }
    }
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
            if (typeof book[property] != "function") {
            let cell = document.createElement("td");
            cell.textContent = `${book[property]}`;
            bookRow.appendChild(cell);
            }
        }
        // Change read status button
        const changeReadBtn = document.createElement("button");
        changeReadBtn.textContent = "Change read status";
        changeReadBtn.addEventListener("click", () => {
            book.changeReadStatus();
            displayBooks();
        })
        bookRow.appendChild(changeReadBtn);
        // Remove book functionality
        const removeBookBtn = document.createElement("button");
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

// Change "read" status functionality

