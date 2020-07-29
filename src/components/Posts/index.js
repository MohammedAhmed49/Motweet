import React from 'react';
import classes from './posts.module.css';
import Post from './Post';

function Posts() {
    return (
        <div className={classes.posts}>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;