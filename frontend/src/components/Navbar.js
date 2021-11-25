import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-light">Note Keeper</a>
                <div className="nav justify-content-end">
                    <div className="navbar-nav ml-3">
                        <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                        <a className="nav-link text-light" href="/Login">Login</a>
                        <a className="nav-link text-light" href="/signup">signup</a>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
