import React, { Component } from 'react';
import NewPost from '../NewPost';
import Posts from '../../components/Posts';

class Home extends Component {
    render() {
        return (
            <div>
                <NewPost/>
                <Posts/>
            </div>
        )
    }
}

export default Home;

