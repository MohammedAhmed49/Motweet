import React from 'react';
import classes from './newPost.module.css';
import Button from '../UI/Button';

function NewPost() {
    return (
        <div className={classes.newPost}>
            <div className="container">
                <form>
                    <input  className={classes.input} type="text" placeholder="Post name"/>
                    <textarea className={classes.input} placeholder="Post body"/>
                    <Button>Post</Button>
                </form>
            </div>
        </div>
    )
}

export default NewPost;