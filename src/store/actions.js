import * as actionNames from './actionNames';

export const addPost = (newPost) => {
    return {
        type: actionNames.ADD_POST,
        newPost: newPost
    }
}