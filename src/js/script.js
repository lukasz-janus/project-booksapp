/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';
   
  const select = {
    templateOf: {
      bookList: '#template-book',
    },
    list: {
      listOfBooks: '.books-list',
      singleBook: 'a.books-list',
    },
    image: {
      bookImage: '.book__image',
      imageId: '.data-id',
    },
  };

  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.bookList).innerHTML),
  };

  function render(){
    for(let book of dataSource.books){
      const generatedHTML = templates.books(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      const booksPanel = document.querySelector(select.list.listOfBooks);
      booksPanel.appendChild(generatedDOM);
      console.log('function render is on');
    }
  }
  render();

  const favoriteBooks = [];

  function initActions(){
    const booksPanel = document.querySelector(select.list.listOfBooks);
    const bookImage = document.querySelector(select.image.bookImage);
    const book = booksPanel.querySelector(select.list.singleBook);

    console.log('thisBook.book:', book);

    book.addEventListener('dblclick', function(event){
      event.preventDefault();
      console.log('image cliked', event.target);
      book.classList.add('favorite');
      // favoriteBooks.push(image);
    });
    console.log('image');

    console.log('favoriteBooks', favoriteBooks);

  }
  initActions();
}