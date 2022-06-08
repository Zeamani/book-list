import React from 'react';
import AppModalContent from './AppModalContent';

const AppModal = ({ children, modalState, closeModal, title }) => {
    return (
    <>
        {modalState && 
            <AppModalContent 
                modalBody={children}
                closeModal={closeModal}
                title={title}
            />}
    </>
    );
} 

export default AppModal;