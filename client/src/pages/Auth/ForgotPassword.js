import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import toast from "react-hot-toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");


    const navigate = useNavigate();


    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);


                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title={"Forgot Password-Green Delight"}>
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">Reset Password</h4>
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
                        <label htmlFor="password"><strong>New Password</strong><span className="required">*</span></label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            autoComplete="current-password" // Add this line
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Security Code </strong><span className="required">*</span></label>
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="answer"
                            placeholder="Enter Your childhood NickName"
                            required
                            autoComplete="current-password" // Add this line
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Reset
                    </button>


                    <div className="links">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                        <p>By logging in, you agree to our <Link to="/policy">Privacy Policy</Link></p>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default ForgotPassword