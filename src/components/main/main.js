import React from 'react';
import Post from '../subComponents/post/post';
import './main.scss';
import jung from '../../resources/img/jung.jpg';
import karen from '../../resources/img/karen.jpg';
import meme from '../../resources/img/meme.png';
import meme2 from '../../resources/img/meme2.jpg';

const Main = () => {

    return (
        <div className='main'>
            <p className='main__title'>Главная</p>
            <div className='main__post'>
                <Post profile={jung} name='Густав' name_year='@young • 1938 г.' text=')))' moon={meme} />
                <Post profile={karen} name='Дани' name_year='@honey • 1950 г.' 
                text='Шломо, какого черта....' moon={meme2} />
            </div>
        </div>
    );
};

export default Main;