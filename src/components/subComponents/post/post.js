import React from "react";
import './post.scss';
import profile from '../../../resources/img/photoOfProfile.svg';

const Post = (props) => {
    return(
        <div className="post">
            <div className="post__autor">
                <img className="imgAutor" src={profile} alt=''/>
                <div className="name">{props.name}</div>
                <div className="name_year">{props.name_year}</div>
            </div>
            <div className="post__content">
                <div className="text">{props.text}</div>
                <img className="moon" src={props.moon} alt=''/>
                <div className="reaction">
                    <div className="icons icon-chat_bubble"/>
                    <div className="icons icon-cached"/>
                    <div className="icons icon-favorite"/>
                </div>
            </div>
           
        </div>
    )
}

export default Post;