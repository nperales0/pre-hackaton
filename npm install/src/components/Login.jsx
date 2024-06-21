import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../services/api";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await fetchLogin(email, password);
            localStorage.setItem('token', response.token);
            navigate('/profile')
            console.log(response.token);
        } catch (error){
            console.log(error);
        }
    }

    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <div>
                <input onChange={(e) => (setEmail(e.target.value))} type = "email" id="email"></input>
            </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div>
                <input onChange={(e) => (setPassword(e.target.value))} type = "password" id="password"></input>
                </div>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
};

export default Login;