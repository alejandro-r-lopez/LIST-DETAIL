/* Imports */

import { getBooks } from './fetch-utils.js';
import { renderBooks } from './render-utils.js';

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
        const bookContainer = renderBooks(book);

        librarySection.append(bookContainer);
    }

    return librarySection;
});
