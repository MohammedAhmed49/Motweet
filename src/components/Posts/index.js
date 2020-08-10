import React from 'react';
import classes from './posts.module.css';
import Post from './Post';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);