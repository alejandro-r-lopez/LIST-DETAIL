import { getBook } from '../fetch-utils.js';
import { renderBook } from '../render-utils.js';

const detailsSection = document.querySelector('.details');

let bookData = {};

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const book = await getBook(id);

    bookData = book;
    const detailsContainer = renderBook(book);

    detailsSection.append(detailsContainer);
});
