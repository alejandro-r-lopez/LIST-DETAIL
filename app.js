/* Imports */

import { getBooks } from './fetch-utils.js';

/* Get DOM Elements */

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

const librarySection = document.querySelector('.library');

let booksData = [];

window.addEventListener('load', async () => {
    const books = await getBooks();

    booksData = books;

    for (let book of booksData) {
        const bookContainer = document.createElement('div');
        const bookInfo = document.createElement('p');

        bookInfo.textContent = book.book_title;

        bookContainer.append(bookInfo);

        librarySection.append(bookContainer);
    }
    return librarySection;
});
