import React from 'react';
import classes from './newPost.module.css';
import Button from '../UI/Button';
import * as actionNames from '../../store/actionNames';
import { addPost } from '../../store/actions';

function NewPost(props) {
    return (
        <div className={classes.newPost}>
            <div className="container">
                <form onSubmit={props.postSubmit}>
                    <input 
                        className={classes.input} 
                        type="text" 
                        placeholder="Post name"
                        onChange={(event) => {props.inputChange(event, 'title')}}
                        value={props.newPost.title}
                    />
                    <textarea 
                        className={classes.input} 
                        placeholder="Post body"
                        onChange={(event) => {props.inputChange(event, 'body')}}
                        value={props.newPost.body}
                    />
                    <Button>Post</Button>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (title, body) => dispatch(addPost(title, body))
    }
}

export default NewPost;