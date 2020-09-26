import React, {Component} from 'react';
import Toolbar from '../../components/Navbar/Toolbar';
import Home from '../../containers/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import SinglePost from '../../components/SinglePost';
import {initPosts} from '../../store/actions/actions';
import { connect } from 'react-redux';
import SignUp from '../../containers/Auth/SignUp';
import SignIn from '../../containers/Auth/SignIn';



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
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
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
