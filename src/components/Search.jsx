import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Search = ({ searchStr, setSearchStr }) => {
    return (
        <div className="book-search">
            <input className="book-search__input" value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
            <div className="book-search__icon">
                <FontAwesomeIcon  icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Search;