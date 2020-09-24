import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../UI/Logo';
import { NavLink } from 'react-router-dom';
import NavItems from '../NavItems';

function Toolbar() {
    return (
        <nav>
            <div className="container">
                <div className={classes.linksGrid}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                    <NavItems />
                </div>
            </div>
        </nav>
    )
}

export default Toolbar;