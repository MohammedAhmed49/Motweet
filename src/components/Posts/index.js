import React, {useEffect} from 'react';
import classes from './posts.module.css';
import Post from './Post';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner';

function Posts(props) {

    // useEffect (() => {
    //     props.initPosts();
    // }, []);

    
    let posts = <Spinner />;

    if(!props.loading && props.posts){
        if(props.posts.length === 0){
            posts = <p>There's no posts!</p>;
            
        } else {
            posts = Object.keys(props.posts).map(key => {
                return(
                    <Post key={key} post={props.posts[key]}/>
                )
            });
        }
    }
    return (
        <div className={classes.posts}>
            {posts}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts.posts,
        loading: state.posts.loading,
    }
}

export default connect(mapStateToProps)(Posts);