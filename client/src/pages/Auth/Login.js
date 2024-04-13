import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import "../../styles/AuthStyles.css";

import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title="Login - Ecommerce App">
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong> <span className="required">*</span></label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password </strong><span className="required">*</span></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            autoComplete="current-password" // Add this line
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                    <p
                        style={{
                            color: '#007bff', // Change the color to match your design
                            cursor: 'pointer', // Change cursor to pointer to indicate it's clickable
                            transition: 'color 0.3s ease', // Add a smooth transition effect for color change
                            textDecoration: 'underline', // Underline the text
                            display: 'inline', // Make sure it's displayed inline
                            margin: '0', // Remove any default margins
                            padding: '0', // Remove any default padding
                        }}
                        onClick={() => navigate('/forgot-password')}
                    >
                        Forgot Password?
                    </p>

                    <div className="links">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                        <p>By logging in, you agree to our <Link to="/policy">Privacy Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login; 