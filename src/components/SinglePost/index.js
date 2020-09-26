import React from 'react';
import { connect } from 'react-redux';
import classes from './singlePost.module.css';
import Spinner from '../UI/Spinner';

function SinglePost(props) {
    const filteredPost = props.posts.filter((post) => {
        return post.id == props.match.params.id
    });
    const post = filteredPost[0];
    let content = (<div className={classes.singlePost}><Spinner /></div>);
    if(post){
        const date = new Date(post.date);
        content = (
            <>
                <h2 className={classes.title}>{post.title}</h2>
                <p className={classes.user}>Author: <a href="#">{post.user}</a></p>
                <p className={classes.date}>Writter in: {date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())}</p>
                <p className={classes.body}>{post.body}</p>
            </>
        )
    }
    return (
        <div className={classes.singlePost}>
            {content}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(SinglePost);
