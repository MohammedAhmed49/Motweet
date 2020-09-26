import * as actionNames from './actionNames';
import Axios from '../../axios';
import axios from 'axios';

const startSignup = () => {
    return{
        type: actionNames.SIGN_UP_START
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
        dispatch(startSignup());
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
            localStorage.setItem('idToken', tokenData.idToken);
            localStorage.setItem('expireDate', new Date(new Date().getTime() + tokenData.expiresIn * 1000));
            localStorage.setItem('refreshToken', tokenData.refreshToken);
            localStorage.setItem('userId', tokenData.localId);
            dispatch(checkLogout(tokenData.expiresIn));
            Axios.patch(`/users/${res.data.localId}.json`, data)
            .then(res => {
                dispatch(signupSuccess(tokenData));
            }).catch(error => {
                dispatch(signupFailed(error));
            });
        }).catch(error => {
            dispatch(signupFailed(error));
        });
    }
}


const startSignin = () => {
    return{
        type: actionNames.SIGN_IN_START
    }
}

const signinSuccess = (data) => {
    return{
        type: actionNames.SIGN_IN_SUCCESS,
        data: data
    }
}

const signinFailed = (error) => {
    return{
        type: actionNames.SIGN_IN_FAILED,
        error: error
    }
}

export const initSignin = (email, password) => {
    return (dispatch) => {
        dispatch(startSignin());
        let data = {
            email,
            password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBefE4H-12D78Zna1z7XVc6KzzP6kp5TdM', data)
        .then(res => {
            let tokenData = res.data;
            localStorage.setItem('idToken', tokenData.idToken);
            localStorage.setItem('expireDate', new Date(new Date().getTime() + tokenData.expiresIn * 1000));
            localStorage.setItem('refreshToken', tokenData.refreshToken);
            localStorage.setItem('userId', tokenData.localId);
            dispatch(checkLogout(tokenData.expiresIn));
            Axios.get(`/users/${res.data.localId}.json`)
            .then(res => {
                console.log(res.data);
                dispatch(signinSuccess(tokenData));
            }).catch(error => {
                dispatch(signinFailed(error));
            });
        }).catch(error => {
            dispatch(signinFailed(error));
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