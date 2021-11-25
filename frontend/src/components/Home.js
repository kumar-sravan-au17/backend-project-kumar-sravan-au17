import React from 'react'
import Login from './Login'
import Signup from './Signup'
import App from '../App.css'

function Home() {
    return (
        <>
            <h1>The Note Keeper</h1>
            <h3>" Your Personal Note Taking App "</h3>
            <div class="login2 container overflow-hidden">
                <h4><b>Click Here To</b></h4>
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <a href="/Login"><b>Login</b></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                        <a href="/Signup"><b>Signup</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
