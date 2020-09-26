import * as actionNames from '../actions/actionNames';

const initState = {
    idToken: null,
    userId: null,
    loading: false,
    error: null
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actionNames.SIGN_UP_START:
            return{
                ...state,
                loading: true
            }
        case actionNames.SIGN_UP_SUCCESS:
            return{
                ...state,
                idToken: action.data.idToken,
                userId: action.data.localId,
                loading: false
            }
        case actionNames.SIGN_UP_FAILED:
            return{
                ...state,
                loading: false,
                error: action.error
            }

        case actionNames.SIGN_IN_START:
            return{
                ...state,
                loading: true
            }
        case actionNames.SIGN_IN_SUCCESS:
            return{
                ...state,
                idToken: action.data.idToken,
                userId: action.data.localId,
                loading: false
            }
        case actionNames.SIGN_IN_FAILED:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;