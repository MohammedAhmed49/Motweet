import React from 'react';
import classes from './posts.module.css';
import Post from './Post';

function Posts(props) {

    let posts = <p>There's no posts!</p>;

    if(props.posts){
        posts = props.posts.map(post => <Post key={post.id} post={post}/>);
    }

    return (
        <div className={classes.posts}>
            {posts}
        </div>
    )
}

export default Posts;