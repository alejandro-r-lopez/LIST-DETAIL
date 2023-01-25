export function renderBooks(book) {
    const bookContainer = document.createElement('a');
    const bookInfo = document.createElement('p');

    bookContainer.classList.add('book-style');

    bookInfo.textContent = book.book_title;
    bookContainer.href = `detail/?id=${book.genre_id}`;

    bookContainer.append(bookInfo);

    return bookContainer;
}

export function renderBook(book) {
    const bookDetailsContainer = document.createElement('div');
    const bookInfo = document.createElement('p');

    bookInfo.textContent = book.summary;

    bookDetailsContainer.append(bookInfo);

    return bookDetailsContainer;
}
