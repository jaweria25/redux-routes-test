import React from 'react';
import Dashboard from './pages/Dashboard';

const authenticatedRoutes = [
	{
		key: 0,
		path: '/dashboard',
		element: Dashboard,
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
