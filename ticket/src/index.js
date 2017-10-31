import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './Layout';
// import Router from './router.js';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
var createHashHistory = require('history/lib/createHashHistory')
var history = createHashHistory();

var MDL = require('mdl-reactjs');
var Button = MDL.Button;
var Card = MDL.Card;

ReactDOM.render(<App /> ,document.getElementById('root'));
registerServiceWorker();


// class harisu extends React.Component(){
// 	render(){
// 		return (
// 			<div className="harisu">
// 				<h1 className = "title"> Hello Harisu how are you doing with react native</h1>
// 				<ul className ="list">
// 					<li> firstName</li>
// 					<li> SecondName</li>
// 					<li> thirdName </li>
// 				</ul>
// 			</div>
// 			);
// 	}
// }

// <Router history = {browserHistory}>
// <Route path = "/" component = {App}>
// <IndexRoute component = {activedeal} />
// <Route path = "newdeal" component = {NewDeal} />
// <Route path = "closeddeal" component = {ClosedDeal} />
// <Route path = "activedeal" component = {ActiveDeal} />
// </Route>
// </Router>
