import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
//it will notify(warn) us if we accidentally mutate redux state..
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
    //add support for redux devtools...
    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
        );
}

// redux middleware is a way to enhance the redux behaviour
//step-4: one store in redux