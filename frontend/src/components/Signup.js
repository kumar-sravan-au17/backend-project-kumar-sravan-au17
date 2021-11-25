import React, { useState } from 'react';


function Signup(login) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email, password);
    }

    return (
        <div className="container mt-5" style={{maxWidth:'500px'}}>
            <h3>Please Signup !!</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="container mt-3">
                    <label for="exampleFormControlInput1" class="form-label m-2">Your Fullname</label>
                    <input type="text" class="form-control" placeholder="name" onChange={(e) => setName(e.target.value)} />

                    <label for="exampleFormControlInput1" class="form-label m-2">Email</label>
                    <input type="email" class="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                    <label for="exampleFormControlInput1" class="form-label m-2">Password</label>
                    <input type="password" class="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn mt-3 btn-primary">Signup</button>
            </form>

        </div>
    )
}

export default Signup;

