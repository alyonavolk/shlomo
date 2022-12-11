import React from 'react';
import './asideMenu.scss';
import Button from '../subComponents/button/button';
import AsideItem from '../subComponents/asiseItem/asideItem';

const AsideMenu = () => {
    return (
        <div className='asideMenu'>
            <ul className='asideMenu__items'>
                <AsideItem children="Главная" font="home" />
                <AsideItem children="Уведомления" font="notifications" />
                <AsideItem children="Сообщения" font="mail" />
                <AsideItem children="Профиль" font="person" />
            </ul>
            <Button children='Новый пост' />
        </div>
    );
};

export default AsideMenu;