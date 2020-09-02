import { GET_TRAILS, ADD_TRAIL, DELETE_TRAIL } from '../actions/types.js';

const initialState = {
    trails: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TRAILS:
            return {
                ...state,
                trails: action.payload
            };
        case DELETE_TRAIL:
            return {
                ...state,
                trails: state.trails.filter(trail => trail.id !== 
                    action.payload)
            };
        case ADD_TRAIL:
            return {
                ...state,
                trails: [...state.trails, action.payload]
            };
        default:
            return state;
    }
}