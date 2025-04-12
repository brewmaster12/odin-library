const myLibrary = []; 
 
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
    myLibrary.map((book) => {
        const bookRow = document.createElement("tr");
        for (property in book) {
            let entry = document.createElement("td");
            entry.textContent = `${book[property]}`;
            bookRow.appendChild(entry);
        }
        table.appendChild(bookRow);
    })
}

displayBooks();