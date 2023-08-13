import React, { useEffect, useState } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validateForm } from "./validation";

const Login = () => {

    const isAuth = localStorage.getItem("isAuth") === "1";
    const navigate = useNavigate();
    useEffect(() => {
        if(isAuth){
            navigate('/home');
        }
    }, [isAuth, navigate]);

  

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        password: '',
    });

    const handleChange =(e)=>{
        // console.log({...values, [e.target.name]: e.target.value})
        setValues({...values, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formErrors = validateForm(values);
        setErrors( formErrors );
        if(Object.keys(formErrors).length === 0){
            axios.post('http://localhost:3001/api/login', {
            username: values.name,
            password: values.password,
            
        })
        .then((response) =>{
            setValues({
                name: (''),
                password:(''),
                
            })
            localStorage.setItem("isAuth", 1);
            navigate('/home')

        })
        .catch((error)=>{
            console.error(error);
        })
        console.log(values);
        }
        
    }

    return(
        <div className='wrapper d-flex align-items-center justify-content-center w-100'>
            <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div className='container'>
                    <div className="form-group">
                        <label className="login-label" htmlFor="name"><b>Username</b></label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Username"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label className="login-label" htmlFor="password"><b>Password</b></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )

} 
export default Login;