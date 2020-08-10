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
        ],
        newPost: {
            id: null,
            user: 'Momo',
            date: null,
            title: '',
            body: ''
        }
    }

    newPostHandler = (e, inputName) => {
        let newPost = { 
            ...this.state.newPost,
            [inputName]: e.target.value
         }
         this.setState({newPost});
    }

    newPostSubmit = (e) => {
        e.preventDefault();
        let newPost = { 
            ...this.state.newPost,
            id: Math.floor(Math.random() * Math.floor(1000000000)),
            date: new Date()
        }

         this.setState(prevState => {
            return{
                posts:[
                    ...prevState.posts,
                    newPost
                ],
                newPost: {
                    id: null,
                    user: 'Momo',
                    date: null,
                    title: '',
                    body: ''
                }
            }
         });
    }

    render() {
        return (
            <div>
                <NewPost 
                    inputChange={this.newPostHandler}
                    newPost={this.state.newPost}
                />
                <Posts/>
            </div>
        )
    }
}

export default Home;

