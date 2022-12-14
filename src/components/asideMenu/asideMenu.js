import React from 'react';
import './asideMenu.scss';
import Button from '../subComponents/button/button';
import AsideItem from '../subComponents/asiseItem/asideItem';

const AsideMenu = () => {
    return (
        <div className='asideMenu'>
            <ul className='asideMenu__items'>
                <AsideItem children="Главная" font="home" link='/main'/>
                <AsideItem children="Уведомления" font="notifications" link='/1'/>
                <AsideItem children="Сообщения" font="mail" link='/2'/>
                <AsideItem children="Профиль" font="person" link='/'/>
            </ul>
            <Button children='Новый пост' />
        </div>
    );
};

export default AsideMenu;