import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        qualification: '',
        role: ''
    })
    const handleChange = (e) => {
        setData(() => ({ ...data, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://e-study-zone.onrender.com/api/user/register', data);
            window.alert("Registered Successgully");
        }
        catch (er) {
            console.log(er)
            alert("Sorry try again later")
        }
    }
    return (
       <div className="container-fluid vh-100 bg-light">
  <div className="row h-100">
    {/* Left Side - Welcome Section */}
    <div className="col-md-6 welcome-box d-flex flex-column justify-content-center align-items-center bg-info text-white p-5">
      <h1 className="mb-4">Join Us Today!</h1>
      <p className="lead text-center">
        Create your account and start your journey with us. 
        Whether you’re a Trainer or a Learner, we’ve got you covered.
      </p>
    </div>

    {/* Right Side - Registration Form */}
    <div className="col-md-6 d-flex boxx justify-content-center align-items-center bg-white ">
      <div className=" p-4  box rounded w-75">
        <h2 className="text-center mb-4 mt-2">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              onChange={handleChange}
              required
              name="name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Enter a Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="qualification" className="form-label">Select Your Higher Qualification</label>
            <select
              className="form-select shadow-sm rounded-pill"
              name="qualification"
              id="qualification"
              onChange={handleChange}
              required
            >
              <option selected disabled>-- Select Qualification --</option>
              <option value="highschool">High School</option>
              <option value="diploma">Diploma</option>
              <option value="btech">B.Tech</option>
              <option value="mtech">M.Tech</option>
              <option value="mba">MBA</option>
              <option value="phd">Ph.D</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Role</label>
            <select
              className="form-select shadow-sm rounded-pill"
              name="role"
              id="role"
              onChange={handleChange}
              required
            >
              <option selected disabled>-- Role --</option>
              <option value="Trainer">Trainer</option>
              <option value="Learner">Learner</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Register
          </button>

          <div className="mt-4 text-center">
            <p>
              Do you have an account?
              <Link to="/" className="text-decoration-none fw-bold ps-1">
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    )
}

export default Register
