import React from 'react';
import classes from './button.module.css';

function Button(props) {
    return (
        <button>{props.children}</button>
    )
}

export default Button;