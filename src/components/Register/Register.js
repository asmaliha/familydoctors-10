import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { signInUsingGoogle, toggleLogin,
        handleEmail,
        handleName,
        handlePassword, user,
        handleRegisterUser, } = useAuth();

    return (
        <div>
            <h2>Please Register</h2>
            <form >
                {<div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleName} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
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

                <button type="submit" className="btn btn-primary" onClick={handleRegisterUser}>
                    Submit
                </button>
            </form>


            <Link to="/login">Already Registered?</Link>

        </div>
    );
};

export default Register;