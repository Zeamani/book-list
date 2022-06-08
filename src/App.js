import React, { useEffect, useMemo, useState } from 'react';
import './styles/main.sass';
import HeaderApp from './components/HeaderApp';
import StorageBook from './API/StorageBook';
import BodyApp from './components/BodyApp';

const App = () => {
  const storageBookList = StorageBook.getStorage();
  const [bookList, setBookList] = useState(storageBookList || []);

  useEffect(() => {
    StorageBook.updateStorage(bookList);
  }, [bookList]);

  const [searchStr, setSearchStr] = useState('');
  const searchBookList = useMemo(() => bookList.filter(book => book.nameBook.includes(searchStr) || book.author.includes(searchStr)), [searchStr, bookList]);

  const addBookToList = (book) => {
    setBookList([...bookList, book]);
  }

  const delBookFromList = (delBookIndex) => {
    setBookList(bookList.filter((book, index) => delBookIndex !== index));
  }

  const editBookInList = (indexEditedBook, editedBook) => {
    const newBookList = bookList.map((book, index) => (index === indexEditedBook) ? editedBook : book);
    setBookList(newBookList);
  }



  return (
    <div className="App">
      <HeaderApp 
        addBookToList={addBookToList}
        searchStr={searchStr}
        setSearchStr={setSearchStr} 
      />
      <BodyApp 
        bookList={searchBookList}
        delBookFromList={delBookFromList} 
        editBookInList={editBookInList}
      />
    </div>
  );
}

export default App;
