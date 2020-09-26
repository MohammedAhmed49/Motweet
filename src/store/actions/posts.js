import * as actionNames from './actionNames';
import Axios from '../../axios';

export const addPost = (newPost) => {
    return {
        type: actionNames.ADD_POST,
        newPost: newPost
    }
}

const startFetching = () => {
    return{
        type: actionNames.POSTS_LOADED_START
    }
}

const postsSuccess = (posts) => {
    return{
        type: actionNames.POSTS_LOADED_SUCCESS,
        posts: posts
    }
}

const postsFailed = (error) => {
    return{
        type: actionNames.POSTS_LOADED_FAILED,
        error: error
    }
}

export const initPosts = () => {
    return (dispatch, getState) => {
        dispatch(startFetching());
        Axios.get('/posts.json')
        .then(res => {
            dispatch(postsSuccess(res.data));
        })
        .catch(error => {
            dispatch(postsFailed(error));
        })
    }
}

const startSubmitting = () => {
    return{
        type: actionNames.POST_SUBMIT_START
    }
}

const submitSuccess = (newPost) => {
    return{
        type: actionNames.POST_SUBMIT_SUCCESS,
        newPost: newPost
    }
}

const submitFailed = (error) => {
    return{
        type: actionNames.POST_SUBMIT_FAILED,
        error: error
    }
}

export const initSubmit = (newPost) => {
    return (dispatch, getState) => {
        dispatch(startSubmitting());
        Axios.post('/posts.json', newPost)
        .then(res => {
            newPost.id = res.data.name;
            dispatch(submitSuccess(newPost));
            
        })
        .catch(error => {
            console.log(error);
            dispatch(submitFailed(error));
        })
    }
}