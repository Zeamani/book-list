import React from 'react';
import AppModal from './UI/AppModal/AppModal';
import { useModal } from '../hooks/useModal';
import BookForm from './BookForm';
import MakerButton from './MakerButton';

const BookMaker = ({ addBookToList }) => {
    const [modal, openModal, closeModal] = useModal();

    return (
        <>
            <AppModal modalState={modal} closeModal={closeModal} title="Новая книга">
                <BookForm 
                    hundlerButton={(book) => {
                        addBookToList(book);
                        closeModal();
                    }}
                    textButton='Добавить'
                />
            </AppModal>

            <MakerButton clickHundler={openModal}/>
        </>
        
    );
}

export default BookMaker;