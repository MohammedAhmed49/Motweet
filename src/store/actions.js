import * as actionNames from './actionNames';

export const addPost = (title, body) => {
    return {
        type: actionNames.ADD_POST,
        title: title,
        body: body
    }
}