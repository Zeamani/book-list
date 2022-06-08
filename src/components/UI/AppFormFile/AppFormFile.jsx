import { faFileArrowUp, faFileCircleCheck, faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import cl from './AppFormFile.module.sass';

const AppFormFile = ({ setImg }) => {
    const formId = useState(Date.now());
    const [fileState, setFileState] = useState(false);

    const readImg = (input) => {
        const file = input.files[0];

        const reader = new FileReader();

        console.log(reader, file);

        reader.readAsDataURL(file);

        reader.onload = function() {
            setImg(reader.result);
            setFileState(file.name);
        };
        
        reader.onerror = function() {
            setFileState("error");
        };
    }

    const getLabelIcon = (state) =>  
        (state === "error") ? faFileCircleXmark :
        (state) ? faFileCircleCheck :
        faFileArrowUp;


    const getLabelText = (state) => 
        (state === "error") ? "Ошибка загрузки" :
        (state) ? fileState :
        "Загрузить картинку";
    
    

    return (
        <div className={cl['appFormFile']}>
            <label 
                htmlFor={formId}
                className={cl['appFormFile__label']}
            >   
                <FontAwesomeIcon icon={getLabelIcon(fileState)} />
                {getLabelText(fileState)}
            </label>
            <input
                className={cl['appFormFile__input']}
                id={formId}
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => readImg(e.target)}
            />
        </div>
        
    );
}

export default AppFormFile;