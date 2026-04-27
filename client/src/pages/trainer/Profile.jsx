import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [data,setData] = useState({
        name:'',
        role:'',
        qualification:'',
        email:''
    })
    const userId = localStorage.getItem('id')
    const handleFetch = async()=>{
        try{
            const res = await axios.get(`http://localhost:5000/api/user/getuser/${userId}`)
            setData(res.data.data)
            console.log(res);
            
        }
        catch{

        }
    }
    useEffect(()=>{
        handleFetch()
    },[])
  return (
    <>
   <div className="profile-container">
      {/* 1. Top Gradient Banner */}
      <div className="profile-banner"></div>

      <div className="container">
        <div className="profile-content">
          {/* 2. Header Section: Avatar, Name, and Edit Button */}
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex align-items-center">
              <div className="avatar-wrapper">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9PoZuiGF_Jz8E3t6u38Fzs0aL8fV2-QMhg&s"
                  alt="Profile"
                  className="profile-avatar"
                />
              </div>
              <div className="ms-4">
                <h3 className="profile-name  text-danger">Name-{data?.name || "Loading..."}</h3>
                <p className="profile-email text-success"> Email-{data?.email || "Fetching email..."}</p>
                 
                 <p className="profile-qualification"><strong>Qualification:</strong>{data?.qualification || "Fetching qualification..."}</p>
                 <p className="profile-role"><strong>Role :</strong>{data?.role || "Fetching role..."}</p>
              
               

              </div>
             
            </div>
           
            {/* <button className="btn btn-primary">Edit</button> */}
            <Link  to='' className='btn btn-primary'> Edit</Link>
          </div>
          

          {/* 3. Form Section */}
          {/* Add form fields here if needed */}
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile