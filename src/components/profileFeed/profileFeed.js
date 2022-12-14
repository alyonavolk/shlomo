import React from 'react';
import './profileFeed.scss';
import Post from '../subComponents/post/post';
import moon from '../../resources/img/moon.png';
import arrow from '../../resources/img/arrow_back.svg';
import office from '../../resources/img/office.png';
import profile from '../../resources/img/photoOfProfile.svg';
import Button from '../subComponents/button/button';

const data = [
    {id:1, name:"Золотой Шломо", name_year:"@founder • 1935 г.", text:"Тайна человеческой души заключена в психических драмах детства. Докопайтесь до этих драм, и исцеление придет."},
    {id:2, name:"Золотой Шломо", name_year:"@founder • 1897 г.", text:"Сны, интересная штука..."},
    {id:3, name:"Золотой Шломо", name_year:"@founder • 1884 г.", text:"В греческой мифологии столько персонажей, надо как-нибудь их использовать в исследованиях "},
    {id:4, name:"Золотой Шломо", name_year:"@founder • 17 июня 1882 г.", text:"Я уверен это навсегда. 🤵🏼‍♂️👰🏻‍♀️"},
    {id:5, name:"Золотой Шломо", name_year:"@founder • 17 июня 1882 г.", text:"Что кроется за многими действиями людей? За фантазиями и снами? Это что-то за гранью сознательного."}
]

const ProfileFeed = () => {
    return (
        <div className='profileFeed'>
            <div className='top_line'>
                <img src={arrow} alt=''/>
                <div className='lineName'>
                    <div className='name'>Золотой Шломо</div>
                    <div className='kolPosts'>5000 постов</div>
                </div>
            </div>
            <div className='mainProfile'>
                <div className='mainProfile__cover'>
                    <div><img className='office' src={office} alt=''/></div>
                    <div><img className='profileImg' src={profile} alt=''/></div>
                </div>
                <div className='infoProfile'>
                    <div className='left'>
                        <div className='name'>Золотой Шломо</div>
                        <div className='nic_name'>@founder</div>
                        <div className='about_me'>Психилог и невролог, но хотел стать юристом.</div>
                        <div className='readers'>
                            <div className='reader'><p>1000 <span>читателей</span></p></div>
                            <div className='reader'><p>1 <span>читаемый</span></p></div>
                        </div>
                    </div>
                    <div className='right'>
                        <Button>Изменить профиль</Button>
                    </div>
                </div>
            </div>
            <div className='posts'>
                <div className='catalog'>
                    <div className='catalog__item catalog__item_active'>Посты</div>
                    <div className='catalog__item'>Ответ</div>
                </div>
                <Post name="Золотой Шломо" name_year="@founder &bull; 1973 г." text="Не думал, что в честь меня назовут кратер." moon={moon}/>
                {data.map((val) => {
                    return (
                        <Post key={val.id} name={val.name} name_year={val.name_year} text={val.text} moon=""/>
                    )
                })}
            </div>
        </div>
    );
};

export default ProfileFeed;