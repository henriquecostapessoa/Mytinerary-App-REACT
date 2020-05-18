import { FETCH_COMMENTS, CREATE_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function reducer (state = initialState, action){
    
    switch(action.type){
        
        case FETCH_COMMENTS:
           
            return {
                ...state,
                items: action.payload,
            }
        
        case CREATE_COMMENT:
            
            return {
                ...state,
                item: action.payload
            }   

        case UPDATE_COMMENT:
            
            return {
                ...state,
                item: action.payload
            }   
        
        case DELETE_COMMENT:
            
            return{
                ...state,
                comments: action.payload
            }
        default:
            return state
    }

}