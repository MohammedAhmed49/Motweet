import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.module.css';

function NavItem(props) {
    return (
        <NavLink 
            to={props.path}
            className={classes.Navlink}
        >
            {props.children}
        </NavLink>
    )
}

export default NavItem;