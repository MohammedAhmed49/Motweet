import React, { Component } from 'react';
import classes from './newPost.module.css';
import Button from '../../components/UI/Button';
import * as actionNames from '../../store/actionNames';
import { addPost } from '../../store/actions';
import { connect } from 'react-redux';

class NewPost extends Component{

    state = {
        newPost: {
            id: null,
            user: 'Momo',
            date: null,
            title: '',
            body: ''
        }
    }

    inputChange = (e, inputName) => {
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
        this.props.addPost(newPost);
        this.setState({
            newPost: {
                id: null,
                user: 'Momo',
                date: null,
                title: '',
                body: ''
            }
        });
    }

    
    render(){
        return (
            <div className={classes.newPost}>
                <div className="container">
                    <form onSubmit={this.newPostSubmit}>
                        <input 
                            className={classes.input} 
                            type="text" 
                            placeholder="Post name"
                            onChange={(event) => {this.inputChange(event, 'title')}}
                            value={this.state.newPost.title}
                        />
                        <textarea 
                            className={classes.input} 
                            placeholder="Post body"
                            onChange={(event) => {this.inputChange(event, 'body')}}
                            value={this.state.newPost.body}
                        />
                        <Button>Post</Button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPost) => dispatch(addPost(newPost))
    }
}

export default connect(null, mapDispatchToProps)(NewPost);