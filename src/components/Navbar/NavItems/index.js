import React from 'react';
import NavItem from './NavItem';

function NavItems() {
    return (
        <div>
            <NavItem path="/signup">Sign Up</NavItem>
            <NavItem path="/signin">Log In</NavItem>
        </div>
    )
}

export default NavItems;