 function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const lolita = new Book("Lolita", "Nabokov", "400", "not read")
const vineland = new Book("Vineland", "Pynchon", "500", "read")

