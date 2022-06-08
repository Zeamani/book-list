import React from 'react';
import BookList from './BookList';

const BodyApp = ({ bookList, delBookFromList, editBookInList }) => {
    return (
        <main className="main">
            <BookList 
                bookList={bookList}
                delBookFromList={delBookFromList} 
                editBookInList={editBookInList}
            />
        </main>
    );
}

export default BodyApp;