"use strict";
// Enum for Book Genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["ScienceFiction"] = "Science Fiction";
    Genre["Fantasy"] = "Fantasy";
    Genre["Biography"] = "Biography";
})(Genre || (Genre = {}));
// Initialize Library Inventory
const library = {
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: Genre.Fiction,
            quantity: 5,
            format: "Paperback"
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: Genre.Fiction,
            quantity: 3,
            format: "Hardcover"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            genre: Genre.ScienceFiction,
            quantity: 7,
            format: "Ebook"
        },
        {
            id: 4,
            title: "The Da Vinci Code",
            author: "Dan Brown",
            genre: Genre.Mystery,
            quantity: 2,
            format: "Paperback"
        }
    ]
};
// Function to Display Library Inventory
function displayInventory(library) {
    console.log("Library Inventory:");
    library.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`);
    });
}
// Function to Add a New Book to the Library
function addBook(library, book) {
    library.books.push(book);
    console.log(`Added new book: ${book.title}`);
}
// Function to Find a Book by Title
function findBookByTitle(library, title) {
    return library.books.find(book => book.title === title);
}
// Function to Update Book Quantity
function updateBookQuantity(library, id, newQuantity) {
    const book = library.books.find(book => book.id === id);
    if (book) {
        book.quantity = newQuantity;
        console.log(`Updated quantity for book ID ${id} to ${newQuantity}`);
    }
    else {
        console.log(`Book with ID ${id} not found.`);
    }
}
// Function to Remove a Book by ID
function removeBook(library, id) {
    const index = library.books.findIndex(book => book.id === id);
    if (index !== -1) {
        const removedBook = library.books.splice(index, 1);
        console.log(`Removed book: ${removedBook[0].title}`);
    }
    else {
        console.log(`Book with ID ${id} not found.`);
    }
}
// Display Initial Inventory
displayInventory(library);
// Add a New Book
const newBook = {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: Genre.Fantasy,
    quantity: 4,
    format: "Hardcover"
};
addBook(library, newBook);
// Display Updated Inventory
displayInventory(library);
// Find a Book by Title
const foundBook = findBookByTitle(library, "1984");
if (foundBook) {
    console.log(`Found book: ${foundBook.title} by ${foundBook.author}`);
}
else {
    console.log("Book not found.");
}
// Update Book Quantity
updateBookQuantity(library, 1, 10);
// Remove a Book by ID
removeBook(library, 3);
// Display Final Inventory
displayInventory(library);
