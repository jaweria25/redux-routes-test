import React from 'react';
// import { createStore } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";

import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { UnAuthorizedWrapper } from './un-authorize-routes';
import { AuthorizeWrapper } from './authorize-routes';
import privateRoutes from './PrivateRoute';
import publicRoutes from './public-route';

function App() {
	let token = sessionStorage.getItem('token');
	function renderRoutes() {
		if (token) {
			return (
				<Routes>
					<Route
						path="*"
						element={<Navigate to="/dashboard" />}
					/>
					{privateRoutes.map(({ path, element, key }) => (
						<Route
							key={key}
							exact
							path={path}
							element={<AuthorizeWrapper />}
						>
							<Route
								key={key + 1}
								exact
								path={path}
								element={element}
							/>
						</Route>
					))}
				</Routes>
			);
		} else {
			return (
				<Routes>
					<Route
						path="*"
						element={<Navigate to="/login" />}
					/>
					{publicRoutes.map(({ path, element, key }) => (
						<Route
							key={key}
							exact
							path={path}
							element={<UnAuthorizedWrapper />}
						>
							<Route
								key={key + 1}
								exact
								path={path}
								element={element}
							/>
						</Route>
					))}
				</Routes>
			);
		}
	}
	return <Router>{renderRoutes()}</Router>;
}

export default App;
