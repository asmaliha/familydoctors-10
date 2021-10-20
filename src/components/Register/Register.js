import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { user, handlePassword, error, handleRegisterUser, handleName } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
            <h3 className="text-dark my-3 py-5 fs-2 text">Please Register</h3>

            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input defaultValue={user.email} {...register("email", { required: true })} type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input onBlur={handlePassword} {...register("password", { required: true })} type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Name</label>
                <input onBlur={handleName} {...register("name")} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address</label>
                <input {...register("address")} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input {...register("city")} type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Dhaka</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input {...register("zip")} type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
            </div>
            <div className="row mb-3 text-success">{error}</div>

            <div className="col-12">
                <input className="btn btn-secondary rounded " type="submit" />
            </div>


            <Link className="text" to="/login">Already Registered?</Link>

        </form>


    );
}




export default Register;