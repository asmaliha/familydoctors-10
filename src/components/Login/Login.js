import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {
        signInUsingGoogle,
        handleEmail,
        handlePassword,
        handleUserLogin,
        error

    } = useAuth();

    return (
        <div className="mx-5">
            <form onSubmit={handleUserLogin}>
                <h3 className="text-dark m-3 px-2">Please Login</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePassword} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3 text-success">{error}</div>

                <button type="submit" className="btn btn-secondary rounded" >
                    Submit
                </button>
                <br />
                <br />

                <Link className="text" to="/register">New User?</Link>

            </form>
            <br />
            <div>or</div>
            <br />
            <button className="btn btn-secondary rounded" onClick={signInUsingGoogle}>Google Sign In</button>
            <br />

        </div>
    );
};

export default Login;