import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skill.css';

const TrainerSkill = () => {
  const UserId = localStorage.getItem("id");

  const [data, setData] = useState({
    skill: '',
    description: '',
    userId: UserId
  });
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fetchSkills = async () => {
    const res = await axios.get('http://localhost:5000/api/skill/skill');
    setSkills(res.data.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/skill/skill', data);
    window.alert(res.data.msg);
    fetchSkills(); // refresh after adding
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/skill/deleteskill/${id}`);
    window.alert(res.data.msg);
    fetchSkills();
  };

  return (
    <div className="container-fluid">
      {/* Form */}
        <div className="div main mt-5">
      <form onSubmit={handleSubmit}>
      
        <div className="skill-container  ">
          <label className='form-label'><b>Add Your Skills Here</b></label>
          <input 
            type="text"  
            placeholder='skills' 
            name='skill' 
            className='form-control' 
            onChange={handleChange} 
            value={data.skill}
          />
        </div>
        <div className="des-container mt-3">
          <label className='form-label'><b>Description About the Skill</b></label>
          <textarea 
            name="description" 
            placeholder='Description' 
            className='form-control' 
            onChange={handleChange} 
            value={data.description}
          ></textarea>
        </div>
        <div className="button-container mt-5">
          <button type="submit" className="btn btn-primary btn-lg shadow">
            Add Skill
          </button>
        </div>
       
      </form>
 </div>
      {/* Table */}
      <div className="table table-container table-responsive mt-5">
        <h2 className='text-center p-3'>SKILLS</h2>
        <table className="table table-bordered table-striped text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>S.NO</th>
              <th>Skills</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.skill}</td>
                <td>{item.description}</td>
                <td>
                  {/* <button className="btn btn-sm btn-primary me-2">Edit</button> */}
                  <button 
                    className="btn btn-sm btn-primary" 
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainerSkill;
