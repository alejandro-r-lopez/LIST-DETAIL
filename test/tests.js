// import functions under test
import { getBooks } from '../fetch-utils.js';

const test = QUnit.test;

test('example test...', (expect) => {
    // Arrange
    const expected = true;

    // Act
    const actual = true;

    // Assert
    expect.deepEqual(actual, expected);
});

test('Should be able to fetch books from database', async (expect) => {
    // Arrange
    const expected = [];

    // Act
    const actual = await getBooks();

    // Assert
    expect.deepEqual(actual, expected);
});
