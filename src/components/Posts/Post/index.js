import React from 'react';
import classes from './post.module.css';
import {NavLink} from 'react-router-dom';

function Post(props) {
    return (
        <NavLink to={`/post/${props.post.id}`} className={classes.post}>
            <div>
                <p className={classes.user}>{props.post.user}</p>
                <p className={classes.date}>{props.post.date.getFullYear() + "-" + (props.post.date.getMonth() + 1) + "-" + props.post.date.getDate() + " " + props.post.date.getHours() + ":" + (props.post.date.getMinutes() < 10 ? "0" + props.post.date.getMinutes() : props.post.date.getMinutes())}</p>
                <p className={classes.title}>{props.post.title}</p>
                <p className={classes.body}>{props.post.body.substr(1, 50) + ' ...'}</p>
            </div>
        </NavLink>
    )
}

export default Post;