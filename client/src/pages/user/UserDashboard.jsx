import React, { useState } from 'react';
// import './TrainerDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaUserAlt, 
  FaBook, 
  FaHandshake, 
  FaLock, 
  FaSignOutAlt, 
  FaBars 
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="d-flex" id="wrapper">
      
      {/* Sidebar */}
      <div className={`bg-dark border-right ${isCollapsed ? 'collapsed' : 'expanded'}`} id="sidebar-wrapper">
        
        <div className="sidebar-heading text-white p-4">
          {isCollapsed ? 'UD' : 'User Dashboard'}
        </div>

        <div className="list-group list-group-flush">

          {/* Profile */}
          <Link
            to='userprofile'
            className="list-group-item list-group-item-action bg-dark text-white border-0 py-3"
          >
            <span className="me-3 fs-5"><FaUserAlt /></span>
            <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Profile</span>
          </Link>

          {/* Courses */}
          <Link
            to='course'
            className="list-group-item list-group-item-action bg-dark text-white border-0 py-3"
          >
            <span className="me-3 fs-5"><FaBook /></span>
            <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Courses</span>
          </Link>

          {/* Handshake */}
          <Link
            to='handshake'
            className="list-group-item list-group-item-action bg-dark text-white border-0 py-3"
          >
            <span className="me-3 fs-5"><FaHandshake /></span>
            <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Handshake</span>
          </Link>

          {/* Change Password */}
          <Link
            to='changepassword'
            className="list-group-item list-group-item-action bg-dark text-white border-0 py-3"
          >
            <span className="me-3 fs-5"><FaLock /></span>
            <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Change Password</span>
          </Link>

          {/* Logout */}
          <Link
            to=''
            className="list-group-item list-group-item-action bg-dark text-white border-0 py-3"
          >
            <span className="me-3 fs-5"><FaSignOutAlt /></span>
            <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Logout</span>
          </Link>

        </div>
      </div>

      {/* Page Content */}
      <div id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3 shadow-sm">
          <button className="btn btn-outline-dark" onClick={toggleSidebar}>
            <FaBars />
          </button>

          <div className="ms-auto">
            <span className="fw-bold">Welcome, User</span>
          </div>
        </nav>

        {/* <div className="container-fluid p-4">
          <h2 className="mt-4 text-danger">User Dashboard</h2> */}

          {/* Nested Routes */}
          <Outlet />
        {/* </div> */}
      </div>

    </div>
  );
};

export default UserDashboard;