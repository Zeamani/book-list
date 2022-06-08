import React from 'react';
import cl from './AppFormInput.module.sass';

const AppFormInput = ({ str, setStr, placeHolder }) => {
    return (
        <input 
            className={cl["appFormInput"]} 
            value={str} 
            onChange={(e) => setStr(e.target.value)}
            placeholder={placeHolder}
        />
    );
} 

export default AppFormInput;