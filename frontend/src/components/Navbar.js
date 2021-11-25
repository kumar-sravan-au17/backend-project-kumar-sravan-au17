import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand text-light">Note Keeper</a>
                <div class="nav justify-content-end">
                    <div class="navbar-nav ml-3">
                        <a class="nav-link active text-light" aria-current="page" href="/">Home</a>
                        <a class="nav-link text-light" href="/Login">Login</a>
                        <a class="nav-link text-light" href="/signup">signup</a>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                </div>
            </div>
        </nav>

        // <nav>
        //     <div className="nav-wrapper blue ">
        //         <Link to="/" className="brand-logo">Note Keeper</Link>
        //         <ul id="nav-mobile" className="right">
        //             <li><Link to="/login">login </Link></li>
        //             <li><Link to="/signup">signup</Link></li>
        //             <li>
        //                 <button className="btn red">logout</button>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}

export default Navbar
