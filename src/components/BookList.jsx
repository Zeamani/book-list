import React from 'react';
import BookItem from './BookItem';

const BookList = ({ bookList, delBookFromList, editBookInList }) => {
    return (
        <ul className="book-list">
            {bookList.map( (book, index) => {
                return (
                    <BookItem 
                        book={book}
                        key={index}
                        delFunc={delBookFromList.bind(null, index)}
                        editFunc={editBookInList.bind(null, index)}
                />);
            })}
        </ul>
    );
}

export default BookList;