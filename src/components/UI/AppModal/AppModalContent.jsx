import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cl from './AppModal.module.sass';

const AppModalContent = ({ modalBody, closeModal, title }) => {
    useEffect(() => {
        const modalCloseHandler = (e) => {
            if (e.target.classList.contains(cl["modal"])) closeModal();
        }
    
        const modalFocusHundler = (e) => {
            if (!e.target.closest(`.${cl["modal"]}`)) {
                document.querySelector(`.${cl["modal__body"]}`).querySelector('input').focus();
            }
        } 

        document.addEventListener("mousedown", modalCloseHandler);
        document.addEventListener("focusin", modalFocusHundler)
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", modalCloseHandler);
            document.removeEventListener("focusin", modalFocusHundler);
        }
    });

    return (
        <>
            {ReactDOM.createPortal(
            <div className={cl["modal"]}>
                <div className={cl["modal__inner"]}>
                    <div className={cl["modal__header"]}>
                        <h1 className={cl["modal__title"]}>{title}</h1>
                        <div className={cl["modal__close-button"]} onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></div>
                    </div>
                    <div className={cl["modal__body"]}>
                        {modalBody}
                    </div>
                </div>
            </div>,
            document.body)}
        </>
        
    );
}

export default AppModalContent;

