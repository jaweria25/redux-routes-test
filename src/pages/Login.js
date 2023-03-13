import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from '../features/userSlice';
export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const dispatch = useDispatch();
	const HandleSubmit = (e) => {

		e.preventDefault();
		if (email === 'abc@gmail.com' && password === '123') {
			// setIsAuthenticated=true;
			
           dispatch(Login());
			// localStorage.setItem('isAuth', 'true');
			window.location.href = '/dashboard';
		} else {
			// setIsAuthenticated=false;
			dispatch(Dashboard());
			// localStorage.setItem('isAuth', 'false');
			navigate('/login');
		}
	};
	
	return (
		<div>
			<div className="container d-flex justify-content-center align-items-center vh-100">
				<div className="card w-50 p-5  ">
					<h3>Login Page</h3>
					<form onSubmit={HandleSubmit}>
						<div className="form-outline mb-4">
							<input
								type="email"
								id="form2Example1"
								value={email}
								placeholder="Enter Email"
								onChange={(e) => setEmail(e.target.value)}
								className="form-control"
							/>
						</div>
						<div className="form-outline mb-4">
							<input
								type="password"
								id="form2Example2"
								value={password}
								placeholder="Enter Password"
								onChange={(e) => setPassword(e.target.value)}
								className="form-control"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary btn-block mb-4"
						>
							log in
						</button>
						<div className="text-center">
							{/* <p>Not a member? <Link to="/register">Register</Link></p> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
