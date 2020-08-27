import React, {useEffect} from 'react';
import classes from './posts.module.css';
import Post from './Post';
import { connect } from 'react-redux';
import {initPosts} from '../../store/actions';



function Posts(props) {

    useEffect (() => {
        props.initPosts();
    }, []);

    let posts = <p>There's no posts!</p>;
    

    if(props.posts){
        // posts = props.posts.map(post => <Post key={post.id} post={post}/>);
        posts = Object.keys(props.posts).map(key => {
            console.log(props.posts[key]);
            return(
                <Post key={key} post={props.posts[key]}/>
            )
        });
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

const mapDispatchToProps = (dispatch) => {
    return{
        initPosts: () => dispatch(initPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);