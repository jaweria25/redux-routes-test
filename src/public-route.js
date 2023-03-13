import React from 'react';
import Login from './pages/Login';

const authenticatedRoutes = [
	{
		key: 0,
		path: '/login',
		element: Login,
	},
];

function withNavigationWatcher(Component, path) {
	const WrappedComponent = function (props) {
		return <Component {...props} />;
	};
	return <WrappedComponent />;
}
export default authenticatedRoutes.map((route) => {
	return {
		...route,
		element: withNavigationWatcher(route.element, route.path),
	};
});
