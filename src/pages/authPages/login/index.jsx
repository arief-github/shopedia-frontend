import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../action/userActions";
import Loading  from "../../../components/Common/Loading";
import Error from '../../../components/Common/Error';

export default function Login() {    
    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const loginreducer = useSelector(state => state.loginReducer);
    const { loading, error } = loginreducer;
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: value.email,
            password: value.password
        }

        dispatch(loginUser(user));
    }

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = "/";
        }
    }, [])

    return (
        <div className="row justify-content-center" >
            <div className="col-md-5 card p-5" style={{ marginTop: 150 }}>
                <h1 className="text-center mb-3">Login</h1>

                {error ? (<Error error="Invalid Credentials"/>) : null}
                {loading ? (<Loading/>) : null}

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" name="email" className="form-control mb-3" value={value.email} onChange={handleChange} required />
                    <input type="password" placeholder="pasword" name="password" className="form-control mb-3" value={value.password} onChange={handleChange} required />
                    <button type="submit" className="btn mt-3" style={{ backgroundColor: 'black', color: 'white', margin: '0 auto' }}>Login</button>
                    <p>Don't have an account ? <Link to="/register">Register Here</Link></p>
                </form>
            </div>
        </div>
    )
}