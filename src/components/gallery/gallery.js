import React from 'react';
import './gallery.scss';
import foto1 from '../../resources/img/foto1.png';
import foto2 from '../../resources/img/foto2.png';
import foto3 from '../../resources/img/foto3.png';
import foto4 from '../../resources/img/foto4.png';
import foto5 from '../../resources/img/foto5.png';
import foto6 from '../../resources/img/foto6.png';

const Gallery = () => {
    return (
        <div className='gallery'>
            <img src={foto1} alt="" />
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
            <img src={foto5} alt="" />
            <img src={foto6} alt="" />
        </div>
    );
};

export default Gallery;