import * as actionNames from '../actions/actionNames';

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
            const posts = Object.entries(action.posts).map(post => {
                let updatedPost = post[1];
                updatedPost.id = post[0];
                return updatedPost;
            });
            return{
                ...state,
                loading: false,
                posts: posts
            }

        case actionNames.POSTS_LOADED_FAILED:
            return{
                ...state,
                loading: false,
                error: action.error
            }

        case actionNames.INIT_SUBMIT:
            return{
                ...state,
                loading: true
            }

        case actionNames.POST_SUBMIT_SUCCESS:
            let updatedPosts = [ action.newPost, ...state.posts ]
            return{
                ...state,
                posts: updatedPosts
            }
        case actionNames.POST_SUBMIT_FAILED:
            return{
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default reducer;