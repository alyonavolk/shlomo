import React from 'react';
import Gallery from '../gallery/gallery';
import Search from '../subComponents/search/search';
import './asideMore.scss';

const AsideMore = () => {

    return (
        <div className='asideMore'>
            <Search />
            <Gallery />
        </div>
    );
};

export default AsideMore;