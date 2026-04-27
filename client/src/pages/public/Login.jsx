import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login",data);
      alert(res.data.msg);
      if(res.data.msg="Login Succesfully"){
        localStorage.setItem("name",res.data.data.name)
        localStorage.setItem("email",res.data.data.email)
        localStorage.setItem("id",res.data.data.id)
        localStorage.setItem("token",res.data.data.token)
        localStorage.setItem("role",res.data.data.role)
       
        if(res.data.data.role=="Trainer"){
          navigate('/trainerdashboard')
        }
        else if(res.data.data.role=="Learner"){
          naviagte('/userdashboard')
        }
      }
    } catch (er) {
      console.log(er);
      // alert("Sorry, try again later");
    }
  };

  return (
    <div className="container-fluid vh-100 bg-light">
  <div className="row h-100">
    {/* Left Side - Welcome Section */}
   <div className="col-md-6 welcome-box d-flex flex-column justify-content-center align-items-center text-white p-5">
  <h1 className="mb-4">WELCOME TO E STUDY ZONE</h1>
  <p className="lead text-center">
    We’re glad to see you again. Log in to continue exploring our platform.
    <br />
    Your journey to success begins with one click on E-Study
  </p>
</div>

    {/* Right Side - Login Form */}
    <div className="col-md-6 d-flex justify-content-center align-items-center boxx">
      <div className="box p-4 rounded w-75">
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter your Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Enter your Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="mb-2 text-end">
            <a href="#" className="text-decoration-none">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>

          <div className="mb-3 mt-4 text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
