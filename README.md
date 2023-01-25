![wireframe](assets/Details-Wireframe.png)

# HTML

-   home page
    -   section to display books
-   details page
    -   section to display details

# STATE

-   fetch-utils.js
    -   fetch all books
    -   fetch 1 book

# EVENTS

-   On load:

    -   request list of books from supabase
    -   add data to state
    -   loop through the data
        -   For each book:
            -   render div
            -   append div
    -   display list of books

-   On clicking book from list:
    -   reference URL to collect id
    -   request single book from supabase using id
    -   add book data to state
        -   render div
        -   append div
    -   display book details div

# SLICES

-   SLICE 1: FETCH ALL BOOK DATA

    -   add supabase SCRIPT, URL, and KEY
    -   create fetch-utils.js
        -   getBooks();
    -   add books to state

-   SLICE 2: DISPLAY BOOKS

    -   create render-utils.js
        -   renderBooks();
    -   append to DOM

-   SLICE 3: FETCH SINGLE BOOK DATA

    -   create getBook();
    -   add book to state
    -   reference URL to collect id

-   SLICE 4: DISPLAY BOOK DETAIL PAGE ON CLICK
    -   add event listener to links
        -   render div
        -   append div
    -   display book details div
