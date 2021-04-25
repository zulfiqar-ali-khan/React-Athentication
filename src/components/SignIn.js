import React from 'react'

import Header from './layout/Header';
import Footer from './layout/Footer';

function SignIn() {
    return (
        <>
        <Header />
            <div className="row">
                <div className="col-md-4 offset-4">
                    <form class="form-signin">
                        <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Please SignIN</h1>
                        <label for="inputEmail" class="sr-only">Email address</label>
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                        <br />

                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                        <br />

                        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </form>
                </div>
            </div>
           
            <Footer />
            
        </>
    )
}

export default SignIn
