import * as actionNames from './actionNames';

const initState = {
    posts: [],
    loading: false,
    error: null
}

const reducer = (state = initState, action) => {
    switch(action.type){
        
        
        case actionNames.POSTS_LOADED_START:
            return{
                ...state,
                loading: true
            }

        case actionNames.POSTS_LOADED_SUCCESS:
            console.log('Posts Success');
            return{
                ...state,
                loading: false,
                posts: action.posts
            }

        case actionNames.POSTS_LOADED_FAILED:
            console.log(action.error);
            return{
                ...state,
                loading: false,
                error: action.error
            }

        case actionNames.POST_SUBMIT_SUCCESS:
            let updatedPosts = [ action.newPost, ...state.posts ]
            return{
                ...state,
                posts: updatedPosts
            }

        default:
            return state;
    }
    
}

export default reducer;