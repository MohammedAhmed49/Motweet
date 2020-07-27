import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../UI/Logo';

function Toolbar() {
    return (
        <nav>
            <div className="container">
                <div className={classes.linksGrid}>
                    <Logo />
                    Here are some Links
                </div>
            </div>
        </nav>
    )
}

export default Toolbar;