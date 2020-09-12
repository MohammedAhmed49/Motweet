import React, {Component} from 'react';
import Toolbar from '../../components/Navbar/Toolbar';
import Home from '../../containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import SinglePost from '../../components/SinglePost';
import {initPosts} from '../../store/actions';
import { connect } from 'react-redux';


class Layout extends Component {
    componentDidMount() {
        this.props.initPosts();
    }
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


const mapDispatchToProps = (dispatch) => {
    return{
        initPosts: () => dispatch(initPosts())
    }
}

export default connect(null, mapDispatchToProps)(Layout);
