import * as actionNames from './actionNames';
import Axios from '../axios';
import axios from 'axios';

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

const startSignup = () => {
    return{
        type: actionNames.SIGN_UP_StART
    }
}

const signupSuccess = (data) => {
    return{
        type: actionNames.SIGN_UP_SUCCESS,
        data: data
    }
}

const signupFailed = (error) => {
    return{
        type: actionNames.SIGN_UP_FAILED,
        error: error
    }
}

export const initSignup = (firstName, lastName, email, password) => {
    return (dispatch) => {
        dispatch(startSignup);
        let data = {
            email,
            password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBefE4H-12D78Zna1z7XVc6KzzP6kp5TdM', data)
        .then(res => {
            data = {
                email,
                firstName,
                lastName,
                date: new Date(),
            }
            let tokenData = res.data;
            localStorage.setItem('token', tokenData.idToken);
            localStorage.setItem('expireDate', new Date(new Date().getTime() + tokenData.expiresIn * 1000));
            localStorage.setItem('refreshToken', tokenData.refreshToken);
            localStorage.setItem('userId', tokenData.localId);
            dispatch(checkLogout(tokenData.expiresIn));
            // Axios.patch(`/users/${res.data.localId}.json`, data)
            // .then(res => {
            //     console.log(tokenData);
            // });
        }).catch(error => {
            console.log(error.message);
        });
    }
}

const checkLogout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expireDate');
            //localStorage.removeItem('refreshToken');
        }, expiresIn * 1000);
    }
}