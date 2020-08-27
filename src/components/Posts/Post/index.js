import React from 'react';
import classes from './post.module.css';
import {NavLink} from 'react-router-dom';

function Post(props) {
    const date = new Date(props.post.date);
    console.log(date);
    return (
        <NavLink to={`/post/${props.post.id}`} className={classes.post}>
            <div>
                <p className={classes.user}>{props.post.user}</p>
                <p className={classes.date}>{date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())}</p>
                <p className={classes.title}>{props.post.title}</p>
                <p className={classes.body}>{props.post.body.substr(1, 50) + ' ...'}</p>
            </div>
        </NavLink>
    )
}

export default Post;