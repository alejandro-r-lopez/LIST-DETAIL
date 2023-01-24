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
    console.log(booksData);
});
