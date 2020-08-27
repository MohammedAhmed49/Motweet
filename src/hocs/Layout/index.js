import React, {Component} from 'react';
import Toolbar from '../../components/Navbar/Toolbar';
import Home from '../../containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import SinglePost from '../../components/SinglePost';

class Layout extends Component {
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <header>
                        <Toolbar />
                    </header>
                    <Route exact path="/" component={Home} />
                    <Route path="/post/:id" component={SinglePost} />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Layout;
