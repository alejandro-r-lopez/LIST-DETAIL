export function renderBooks(book) {
    const bookContainer = document.createElement('a');
    const bookInfo = document.createElement('p');

    bookInfo.textContent = book.book_title;
    bookContainer.href = `../detail/`;

    bookContainer.append(bookInfo);

    return bookContainer;
}
