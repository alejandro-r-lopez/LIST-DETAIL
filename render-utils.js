export function renderBooks(book) {
    const bookContainer = document.createElement('a');
    const bookInfo = document.createElement('p');

    bookContainer.classList.add('book-style');

    bookInfo.textContent = book.title;
    bookContainer.href = `detail/?id=${book.genre_id}`;

    bookContainer.append(bookInfo);

    return bookContainer;
}

export function renderBook(book) {
    const bookDetailsContainer = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookGenre = document.createElement('p');
    const bookYear = document.createElement('p');
    const bookInfo = document.createElement('p');

    bookTitle.textContent = book.title;
    bookInfo.textContent = book.summary;
    bookGenre.textContent = book.book_genres.genre;
    bookYear.textContent = book.publication_year;

    bookDetailsContainer.append(bookTitle, bookGenre, bookYear, bookInfo);

    return bookDetailsContainer;
}
