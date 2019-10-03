import * as types from './actionTypes';
//step 1 creating an action...
import * as authorApi from '../../api/authorApi'

//object short-hand syntax: we can ommit the right-hand side, since it matches left-hand side..

export function loadAuthorsSuccess(authors){
    return {type:types.LOAD_AUTHORS_SUCCESS, authors}
}
//thunk
export function loadAuthors(){
    return function (dispatch){
        return authorApi.getAuthors().then(authors=>{
            //console.log("actions",authors);
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error=>{
            throw error;
        })
    }
}