import React from 'react';
import { connect } from 'react-redux';
import NavItem from './NavItem';

function NavItems(props) {
    const links = props.isAuth ? <NavItem path="/logout">Log out</NavItem> : (<><NavItem path="/signup">Sign Up</NavItem>
    <NavItem path="/signin">Log In</NavItem></>)
    return (
        <div>
            {links}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.idToken != null
    }
}

export default connect(mapStateToProps)(NavItems);