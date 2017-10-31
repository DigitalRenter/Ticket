import React from 'react';
import App from './App';
import Layout from './Layout';
import  IndexRoute from 'react-dom';
import  Route from 'react-dom';

export default <Route path="/" component={App}>
	<Route path="/layout" component={Layout} />
	</Route>
