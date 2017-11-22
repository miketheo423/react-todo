import React from 'react';
import {Route} from 'react-router';
import App from '../App';
import ToDosContainer from '../containers/ToDosContainer';

export default (
	<Route path='/' component={App}>
		<Route path='/todos' component={ToDosContainer}/>
	</Route>
)