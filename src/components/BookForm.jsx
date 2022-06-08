import React, {useEffect, useState} from 'react';
import AppFormInput from './UI/AppFormInput/AppFormInput';
import AppFormButton from './UI/AppFormButton/AppFormButton';
import AppFormFile from './UI/AppFormFile/AppFormFile';
import AppFormSelect from './UI/AppFormSelect/AppFormSelect';

const BookForm = ({ hundlerButton, textButton, bookState = {nameBook: '', author: '', img: '', color: 'orange'} }) => {
    const [book, setBook] = useState(bookState);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        setButtonDisabled(() => !Object.entries(book).every(item => item[0] === 'img' || item[1]));
    }, [book]);

    return (
        <form className="book-maker-form">
            <AppFormInput placeHolder="Название" str={book.nameBook} setStr={str => setBook({...book, nameBook: str})}/>
            <AppFormInput placeHolder="Автор" str={book.author} setStr={str => setBook({...book, author: str})}/>
            <AppFormFile setImg={img => setBook({...book, img: img})}/>
            <AppFormSelect 
                listOptions={
                    [
                        {
                            name: "Оранжевый",
                            value: "orange"
                        },
                        {
                            name: "Зелёный",
                            value: "green"
                        },
                        {
                            name: "Синий",
                            value: "blue"
                        },
                        {
                            name: "Красный",
                            value: "red"
                        }
                    ]
                }
                value={book.color}
                setValue={color => setBook({...book, color: color})}
            />
            <AppFormButton
                clickHundler={() => {
                    hundlerButton(book);
                }}
                isDisabled={buttonDisabled}
            >
                {textButton}
            </AppFormButton>
        </form>
    )
}

export default BookForm;