/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';
   
  const select = {
    templateOf: {
      bookList: '#template-book',
    },
    list: {
      listOfBooks: '.books-list',
      singleBook: '.book__image',
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
    for(const book of dataSource.books){
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
    const book = booksPanel.querySelectorAll(select.list.singleBook);

    console.log('select.list.singleBook:', select.list.singleBook);
    console.log('book:', book);

    favoriteBooks.push(book);

    for(let b of favoriteBooks){  
      booksPanel.addEventListener('dblclick', function(event){
        event.preventDefault();
        console.log('image cliked', event.target);
        event.target.classList.add('favorite');
      // favoriteBooks.push(image);
      });
      console.log('image');
      console.log('b:', b);
    }
    

    console.log('favoriteBooks', favoriteBooks);

  }
  initActions();
}