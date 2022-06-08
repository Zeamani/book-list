import React from 'react';
import BookMaker from './BookMaker';
import Search from './Search';

const HeaderApp = ({ addBookToList, searchStr, setSearchStr }) => {
    return (
        <header className="header">
            <Search searchStr={searchStr} setSearchStr={setSearchStr} />
            <BookMaker addBookToList={addBookToList} />
        </header>
    );
}

export default HeaderApp;