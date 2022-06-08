import React from 'react';
import cl from './AppFormSelect.module.sass';

const AppFormSelect = ({ listOptions, value, setValue }) => {
    return(
        <select className={cl['appFormSelect']} value={value} onChange={(e) => setValue(e.target.value)}>
            {listOptions.map( (option, index) => <option key={index} value={option.value}>{option.name}</option>) }
        </select>
    );

}

export default AppFormSelect;