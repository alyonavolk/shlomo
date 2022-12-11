import React from 'react';
import './asideItem.scss';
import '../../../style/iconsFont.scss';

const AsideItem = ({children, font}) => {
    return (
        <li className={`asideItem icon-${font}`}>
            {children}
        </li>
    );
};

export default AsideItem;