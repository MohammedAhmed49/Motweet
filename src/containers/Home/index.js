import React, { Component } from 'react';
import NewPost from '../../components/NewPost';
import Posts from '../../components/Posts';

class Home extends Component {
    state = {
        posts: [
            {
                id: 1,
                user: 'Momo',
                date: new Date(),
                title: 'First title',
                body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
            },
            {
                id: 2,
                user: 'Momo2',
                date: new Date(),
                title: 'Second title',
                body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
            },
            {
                id: 3,
                user: 'Momo3',
                date: new Date(),
                title: 'Third title',
                body: 'This is a body for a post. This is a body for a post. This is a body for a post. This is a body for a post. '
            },
        ]
    }
    render() {
        return (
            <div>
                <NewPost />
                <Posts posts={this.state.posts}/>
            </div>
        )
    }
}

export default Home;