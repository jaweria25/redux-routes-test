import React from 'react';

export default function Dashboard() {
	return (
		<div>
			<h1>Dashboard page</h1>
			<button
				onClick={() => {
					localStorage.clear();
					window.location.href = '/';
				}}
			>
				Logout
			</button>
		</div>
	);
}
