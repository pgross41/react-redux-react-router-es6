import * as types from './actionTypes';
//step 1 creating an action...
//import * as authorApi from '../../api/authorApi'
import * as courseApi from '../../api/courseApi';

export function createCourse(course){
    debugger;
    return {type: types.CREATE_COURESE, course};
}

//object short-hand syntax: we can ommit the right-hand side, since it matches left-hand side..
export function loadCourseSuccess(courses){
    return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses(){
    return function (dispatch){
        return courseApi.getCourses().then(courses =>{
            dispatch(loadCourseSuccess(courses));
        }).catch(error=>{
            throw error;
        })
    }
}

