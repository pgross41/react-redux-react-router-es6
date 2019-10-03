import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';
//this will provide Redux store data to our React components

const store = configureStore();
//it can be useful to pass initial state into the store here
// if you are server rendering or 
//initializing your redux store with data from localStorage.


render(
<ReduxProvider store={store}>
    <Router>
        <App/>
    </Router>
</ReduxProvider>, document.getElementById("app")
);