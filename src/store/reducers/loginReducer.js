import { FETCH_LOGINS, FETCH_LOAD_LOGIN, FETCH_DELETE_FAVORITE, FETCH_ADD_FAVORITE } from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGINS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                items: action.payload
            }    
        case FETCH_LOAD_LOGIN:
           
        
            return {
                ...state,
                user: action.payload
                
            }  
        case FETCH_DELETE_FAVORITE:
           
        
            return {
                ...state,
                items: action.payload
                
            }  
        case FETCH_ADD_FAVORITE:
           
        
            return {
                ...state,
                items: action.payload
                
            } 
            default:
                return state;  
           
    }
};
