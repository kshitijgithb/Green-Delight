import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
 import toast from "react-hot-toast";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
      const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth,setAuth]=useAuth()

    const navigate = useNavigate();
    const location = useLocation();

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,

            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message,{
    duration: 3000, // Set duration to 3000 milliseconds (3 seconds)
  });
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem("auth",JSON.stringify(res.data))
                navigate(location.state||"/");
            } else {
                toast.error(res.data.message,{
    duration: 3000, // Set duration to 3000 milliseconds (3 seconds)
  });
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

  return (
    <Layout title="Register - Ecommerce App">
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
                        <label htmlFor="password"><strong>Password</strong> <span className="required">*</span></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>
                </form>
            </div>
        </Layout>
  )
}

export default Login