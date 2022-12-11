import React, { useState } from 'react';
import './search.scss';

const Search = () => {
    const [value, setValue] = useState('');

    return (
        <div className='search'>
            <input type='text' value={value} placeholder='Поиск'
            onChange={() => setValue()} />
        </div>
    );
};

export default Search;