import * as types from '../actions/actionTypes';

//step 2: creating the reducer function for the first action....
export default function authorReducer(state = [], action){
    switch(action.type){
        case types.LOAD_AUTHORS_SUCCESS:
            //console.log("reducer",action.authors);
            return action.authors;
        default: return state;
    }
}

//all reducers will take the state and action as an arguments.....
//normalizing the states shape in redux docs..