import { REQUEST_COMMENTS, FETCH_COMMENTS, FAILURE_FETCHING_COMMENTS, GET_USER, CREATE_COMMENT, FAILURE_CREATE_COMMENT, DELETE_COMMENT} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function reducer (state = initialState, action){
    
    switch(action.type){
        case REQUEST_COMMENTS:
            return {
                ...state,
                
            }
        case FETCH_COMMENTS:
            
            return {
                ...state,
                items: action.payload,
            }
        case GET_USER:
            // localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                user: action.user
            }
        case FAILURE_FETCHING_COMMENTS:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case CREATE_COMMENT:
            
            return {
                ...state,
                item: action.payload
            }   
        case FAILURE_CREATE_COMMENT:
            return {
                ...state,
                loading: false,
                comment: null,
                error: action.error
            }
        case DELETE_COMMENT:
            
            return{
                ...state,
                comments: state.comments.filter(comment => comment._id !== action.payload)
            }
        default:
            return state
    }

}