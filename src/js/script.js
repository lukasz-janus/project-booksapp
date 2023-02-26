/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';
   
  const select = {
    templateOf: {
      bookList: '#template-book',
    },
    list: {
      listOfBooks: '.books-list',
      singleBook: 'a > .book',
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
  
    thisBook.listOfBooks = document.querySelector(select.list.listOfBooks);
    thisBook.bookImage = document.querySelector(select.image.bookImage);
    thisBook.book = document.querySelectorAll(select.list.singleBook);

    for(let image in thisBook.book){
      console.log('thisBook.book:', thisBook.book);
      thisBook.book.addEventListener('dblclick', function(event){
        event.preventDefault();
        console.log('image cliked');
        favoriteBooks.push(image);
      });
      console.log('image');
    }

    console.log('thisBook.listOfBooks', thisBook.listOfBooks);
    console.log('thisBook.bookImage', thisBook.bookImage);

    // thisBook.book.addEventListener('dblclick', function(event){
    //   console.log('event:', event);
    //   event.preventDefault();
    //   const image = event.thisBookId;
    //   console.log('listOfBooks where is..', thisBook.listOfBooks);
    //   favoriteBooks.push(image);
    // });
    
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