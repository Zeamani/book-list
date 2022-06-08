import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MakerButton = ({ clickHundler }) => {
    return (
        <button 
            className="book-maker-button"
            onClick={clickHundler}
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}

export default MakerButton;