import React, {Component} from 'react';
import Toolbar from '../../components/Navbar/Toolbar';
import Home from '../../containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';

class Layout extends Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <Toolbar />
                </header>
                <BrowserRouter>
                    <Route path="/" component={Home} />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Layout;
