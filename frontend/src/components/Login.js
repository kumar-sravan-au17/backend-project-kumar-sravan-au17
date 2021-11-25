import React, { useState } from 'react';
// import { Navigate } from 'react-router';
import {  useNavigate } from 'react-router-dom'
import App from '../App.css'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        // navigate("/")
    }

    return (
        <div className="login container mt-5" style={{ maxWidth: '500px' }}>
            {/* {true && <Navigate to="/"/>} */}
            <h3>Please Login!!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div class="input-field">
                    <label for="exampleFormControlInput1" class="form-label m-2">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />

                    <label for="exampleFormControlInput1" class="form-label m-2">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn mt-3 btn-primary">Login</button>
            </form>

        </div>
    )
}

export default Login

