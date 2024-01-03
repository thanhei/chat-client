import './login.css';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
const Login = () => {
	const navigate = useNavigate();
	const cookies = new Cookies();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");



    useEffect(() => {
		console.log("con di me nha may dit me mayyy");
		const fetchData = async () => {
            try {
             
               

				axios.get('https://chat-server-ub0t.onrender.com/chat/messages/658305bb3594a356b0e48e08',{ withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': 'https://chat-client-8ra3.onrender.com'
				}})
					  .then((response) => {
						console.log(response);
					  }, (error) => {
						console.log(error);
					  });




            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
	
	}, []);



	const handleUsername = (event) => {
		const { value } = event.target;
		setUsername(value);
	}

	const handlePassword = (event) => {
		const { value } = event.target;
		setPassword(value);
	}

	console.log(username);

	const handleLogin = () => {
		cookies.remove("jwt_token");
		axios.post('https://chat-server-ub0t.onrender/v1/login', {
			username: "user123",
			password: "user123"
		})
			.then(function (response) {
				console.log(response.data.id_token);
				// const decoded = jwtDecode(response.data.id_token);

				// cookies.set("jwt_token", response.data.id_token, {
				// 	expires: new Date(decoded.exp * 1000)
				// });
				// navigate("/chatroom");

			})
			.catch(function (error) {
				console.log(error);
			});

	}


	return (
		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section">Welcome</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-7 col-lg-5">
						<div className="wrap">
							<div className="login-wrap p-4 p-md-5">
								<div className="d-flex">
									<div className="w-100">
										<h3 className="mb-4">Sign In</h3>
									</div>
									<div className="w-100">
										<p className="social-media d-flex justify-content-end">
											<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
											<a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
										</p>
									</div>
								</div>
								<div className="form-group mt-3">
									<input type="text" className="form-control" required onChange={handleUsername} value={username} placeholder='username' />
									{/* <label className="form-control-placeholder">Username</label> */}
								</div>
								<div className="form-group">
									<input id="password-field" type="password" className="form-control" required onChange={handlePassword} value={password} placeholder='password' />
									{/* <label className="form-control-placeholder" >Password</label> */}
									<span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
								</div>
								<div className="form-group">
									<button className="form-control btn btn-primary rounded submit px-3" onClick={handleLogin}>Sign In</button>
								</div>
								<div className="form-group d-md-flex">
									<div className="w-50 text-left">
										<label className="checkbox-wrap checkbox-primary mb-0">Remember Me
											<input type="checkbox" />
											<span className="checkmark"></span>
										</label>
									</div>
									<div className="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
								</div>
								<p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Login;
