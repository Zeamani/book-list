import { faSquarePen, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useModal } from '../hooks/useModal';
import BookForm from './BookForm';
import AppModal from './UI/AppModal/AppModal';

const BookItem = ({ book, delFunc, editFunc }) => {
    const [modal, openModal, closeModal] = useModal();
    const bookItem = useRef(null);
    
    return (
        <>
            {<AppModal modalState={modal} closeModal={closeModal} title="Редактирование">
                <BookForm
                    hundlerButton={(book) => {
                        editFunc(book);
                        closeModal();
                    }}
                    bookState={book}
                    textButton="Изменить"
                />
            </AppModal>}

            <li className={`book-list__item book-item book-item_${book.color}`} ref={bookItem}>
                <div className="book-item__bg"></div>
                    <div 
                        className="book-item__img-wrap"
                        onMouseOver={(e) => {
                            bookItem.current.querySelector(".book-item__img-wrap").style.animationName = "getBook";
                        }}
                        onMouseOut={(e) => {
                            bookItem.current.querySelector(".book-item__img-wrap").style.animationName = "putBook";
                        }}
                    >
                        {book.img 
                            ? <img className="book-item__img" src={book.img} alt={book.name}/>
                            : <div className="book-item__spare-img">Book</div>}
                        <div 
                            className="book-item__control">
                            <FontAwesomeIcon onClick={openModal} icon={faSquarePen} />
                            <FontAwesomeIcon onClick={delFunc} icon={faSquareXmark} />
                        </div>
                    </div>

                <div className="book-item__pocket">
                    <div className="book-item__pocket-left-wall"></div>
                    <div className="book-item__pocket-right-wall"></div>
                    <h2 className="book-item__name">{book.nameBook}</h2>
                    <p className="book-item__author">{book.author}</p>
                </div>    
            </li>
        </>
    );
}

export default BookItem;

