import React from 'react';
import './button.scss';

const Button = ({children}) => {
    return (
        <button className="button" type='button'>
            {children}
        </button>
    );
};

export default Button;