import React from 'react';
import { connect } from 'react-redux';
import classes from './singlePost.module.css';

function SinglePost(props) {
    const post = props.posts.filter((post) => {
        return post.id == props.match.params.id
    });
    const date = new Date(post.date);
    return (
        <div className={classes.singlePost}>
            <h2 className={classes.title}>{post[0].title}</h2>
            <p className={classes.user}>Author: <a href="#">{post[0].user}</a></p>
            <p className={classes.date}>Writter in: <a href="#">{date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())}</a></p>
            <p className={classes.body}>{post[0].body}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(SinglePost);
