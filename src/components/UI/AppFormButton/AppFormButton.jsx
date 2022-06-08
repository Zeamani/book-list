import React from 'react';
import cl from './AppFormButton.module.sass'

const AppFormButton = ({ children, clickHundler, isDisabled }) => {
    return (
        <button disabled={isDisabled} className={cl["appFormButton"]} onClick={clickHundler}>{children}</button>
    );
}

export default AppFormButton;