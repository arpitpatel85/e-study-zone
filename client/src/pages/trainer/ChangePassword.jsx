import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePassword.css'; // 👈 import CSS

const ChangePassword = () => {
  const userId = localStorage.getItem('id');

  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      return window.alert("Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/changepassword", {
        userId,
        ...data
      });

      window.alert(res.data.msg);

      setData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

    } catch (err) {
      console.error(err);
      window.alert("Error changing password");
    }
  };

  return (
    <div className="container change-password-container">
      <div className="col-md-6 col-lg-5" style={{marginTop:"-100px"}}>
        
        <div className="card change-password-card">
          
          <div className="card-body">
            
            <h3 className="change-password-title">
              Change Password
            </h3>

            <form onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label className="form-label fw-semibold">Current Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  className="form-control"
                  onChange={handleChange}
                  value={data.oldPassword}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  className="form-control"
                  onChange={handleChange}
                  value={data.newPassword}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  onChange={handleChange}
                  value={data.confirmPassword}
                  required
                />
              </div>

              <button type="submit" className="btn change-password-btn">
                Update Password
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;