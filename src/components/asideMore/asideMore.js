import React from 'react';
import Gallery from '../gallery/gallery';
import Search from '../subComponents/search/search';
import './asideMore.scss';

const AsideMore = ({gallery}) => {

    return (
        <div className='asideMore'>
            <Search />
            { gallery ? <Gallery /> : null}
        </div>
    );
};

export default AsideMore;