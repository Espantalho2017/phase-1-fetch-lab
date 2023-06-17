function fetchBooks() {
  const booksObject = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
  return booksObject ;
}
// To pass the tests, don't forget to return your fetch!
// it should call the second function, renderBooks(), 
// passing in the JSON-ified data as the argument.

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
