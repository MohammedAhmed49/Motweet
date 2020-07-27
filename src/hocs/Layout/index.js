import React, {Component} from 'react';
import Toolbar from '../../components/Navbar/Toolbar';
import Home from '../../containers/Home';

class Layout extends Component {
    render(){
        return(
            <React.Fragment>
                <header>
                    <Toolbar />
                </header>
                <Home />
            </React.Fragment>
        )
    }
}

export default Layout;
