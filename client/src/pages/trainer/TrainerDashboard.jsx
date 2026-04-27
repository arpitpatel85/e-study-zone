import React, { useState } from 'react';
import './TrainerDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Note: You can install react-icons using: npm install react-icons
import { 
  FaUserAlt, 
  FaCloudUploadAlt, 
  FaHandshake, 
  FaLock, 
  FaSignOutAlt, 
  FaBars 
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const TrainerDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: 'Skills', icon: <FaUserAlt />, link: '#skills' },
    { name: 'Upload Content', icon: <FaCloudUploadAlt />, link: '#upload' },
    { name: 'Handshake Request', icon: <FaHandshake />, link: '#handshake' },
    { name: 'Change Password', icon: <FaLock />, link: '#password' },
    { name: 'Logout', icon: <FaSignOutAlt />, link: '#logout', isLogout: true },
  ];
 

  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className={`bg-dark border-right ${isCollapsed ? 'collapsed' : 'expanded'}`} id="sidebar-wrapper">
        <div className="sidebar-heading text-white p-4">
            {isCollapsed ? 'TD' : 'Trainer Dashboard'}
        </div>
        <div className="list-group list-group-flush">
         {/* for skills */}
            <Link
             
              to='trainerprofile'
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaUserAlt /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Profile</span>
            </Link>
            {/* for content */}


              <Link
             
              to='skill'
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaUserAlt /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Skills</span>
            </Link>
             
             
             <Link
             
              to='content'
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaCloudUploadAlt /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Upload Content</span>
            </Link>
         {/* for the handshak */}
           <Link
             
              to='handshake'
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaHandshake /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>Handshake</span>
            </Link>
            {/* for password */}
            <Link
             
              to='changepassword'
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaLock /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`}>password</span>
            </Link>
            {/* for logout */}
            <Link
             
              to=''
             
              className={`list-group-item list-group-item-action bg-dark text-white border-0 py-3 `}
            >
              <span className="me-3 fs-5"><FaSignOutAlt /></span>
              <span className={`menu-text ${isCollapsed ? 'd-none' : ''}`} >Logout</span>
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
              {/* <h2 className=" text-danger text-start"> Trainer's Dashboard </h2>  */}
            <span className="fw-bold">Welcome, Trainer</span>
          </div>
        </nav>

        {/* <div className="container-fluid p-4">
          <h2 className="mt-4 text-danger"> Trainer's Dashboard </h2> */}
          {/* <p>Select a menu item from the sidebar to manage your profile and content.</p> */}
          
          {/* Example Content Grid */}
          <Outlet/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TrainerDashboard;