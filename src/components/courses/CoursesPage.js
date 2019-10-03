import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';


class CoursesPage extends Component {
    
      componentDidMount(){
        console.log("coursespage",this.props);
        const {courses, authors, actions} = this.props;
        if(courses.length === 0){
        actions.loadCourses().catch(error =>{
            alert("Loading courses failed" + error)
        });
    }
    if(authors.length === 0){
          actions.loadAuthors().catch(error=>{
              alert("Loading authors failed" + error);
          });
        }
      }
    render() {
        return (
            <>
            <h2>Courses</h2> 
            <CourseList courses={this.props.courses} />          
            </>
        );
    }
}

//propTypes
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors:PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

//when declaring mapStateToProps be specific. request only the data your component needs.
//ownProps parameter contains the props that is related to this component. its not required right now so we are remoeving.
//mapStateToProps(state, ownProps) takes two arguments.
function mapStateToProps(state){
    console.log("map",state.authors)
    return{
        courses:state.authors.lenght === 0 ? [] : state.courses.map(course=>{
            return {
                ...course,
                authorName:state.authors.find(a => a.id === course.authorId).name
            };
        }),
        authors: state.authors
    };
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            loadCourses:bindActionCreators(courseActions.loadCourses,dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);
//mapDispatchToProps: will let us declare what actions to pass to our component on props,
// this is an optional parameter, so we are not using it right now.
//When we omit mapDispatchToProps, our compoent gets a dispatch property injected automatically, so we can use it to dispatch an actions.
