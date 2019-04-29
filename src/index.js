import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'; //app become faster 
import 'tachyons';
import App from './containers/App.js';
//redux 
	//action
import {Provider} from "react-redux";
	//Middleware
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
	//reducer
import {searchRobots,requestRobots} from "./reducer";
	//store
import {createStore , applyMiddleware,combineReducers} from "redux";

//combine two reducers
const rootReducer = combineReducers({searchRobots,requestRobots});

const logger = createLogger();

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(<Provider store={store}>
				<App/> 
				</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
