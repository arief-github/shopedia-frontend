import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerNewUser } from "../../../action/userActions";
import Error from "../../../components/Common/Error";
import Loading  from "../../../components/Common/Loading";
import Success from '../../../components/Common/Success';

export default function Register() {
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const registerstate = useSelector(state => state.registerNewUserReducer);

    const { loading, error, success } = registerstate;

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const user = {
                name: value.name,
                email: value.email,
                password: value.password,
            }
            
            if(value.password === value.confirmPassword) {
                // dispatch action here
                dispatch(registerNewUser(user))
            } else {
                alert('password not match')
            }
        } catch(err) {
            console.error(err)
        }
    }
       
    return (
        <div className="row justify-content-center" >
            <div className="col-md-5 card p-5" style={{ marginTop: 150  }}>
                <h1 className="text-center mb-3">Register</h1>
                {loading && <Loading/>}
                {error ? <Error error="Email has already taken"/> : null}
                {success ? <Success success="Account Successfully Registered" /> : null}

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" name="name" className="form-control mb-3" value={value.name} onChange={handleChange} required/>
                    <input type="email" placeholder="email" name="email" className="form-control mb-3" value={value.email} onChange={handleChange} required/>
                    <input type="password" placeholder="pasword" name="password" className="form-control mb-3" value={value.password} onChange={handleChange} required/>
                    <input type="password" placeholder="confirm password" name="confirmPassword" className="form-control mb-3" value={value.confirmPassword} onChange={handleChange} required/>
                    <button type="submit" className="btn mt-3" style={{ backgroundColor: 'black', color: 'white', margin: '0 auto' }}>Register</button>
                    <br/>
                    <div className="mt-5">
                        <Link to="/login" >Back To Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}