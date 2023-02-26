/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';
   
  const select = {
    templateOf: {
      bookList: '#template-book',
    },
    list: {
      listOfBooks: '.books-list',
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
    const thisBook = this;
    

    thisBook.listOfBooks = document.querySelectorAll(select.list.listOfBooks);
    thisBook.bookImage = document.querySelector(select.image.bookImage);

    for(let image of thisBook.listOfBooks){
      console.log('imageLinks:', image);
    }

    console.log('thisBook.listOfBooks', thisBook.listOfBooks);
    console.log('thisBook.bookImage', thisBook.bookImage);

    thisBook.listOfBooks.addEventListener('dblclick', function(event){
      console.log('event:', event);
      event.preventDefault();
      const image = event.thisBookId;
      console.log('listOfBooks where is..', thisBook.listOfBooks);
      favoriteBooks.push(image);
    });
    
    console.log('favoriteBooks', favoriteBooks);
    //   for(let image of imageLink){
    //   thisInitActions.imageLink.addEventListener('dblclick', function(event){
    //     event.preventDefault();
    //  console.log('initActions', thisBookId);
    // });
    // }   
    // }      
  
  }
  initActions();
}