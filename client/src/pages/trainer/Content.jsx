import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Content = () => {
    const userId = localStorage.getItem('id')
   const [data,setData] = useState([])
   const[form,setForm]=useState({
    skillId:'',
    content:'',
    userId:userId
   })

  const handleFetch = async()=>{
   
      const res = await axios.get(`http://localhost:5000/api/skill/getskill/${userId}`)
      console.log(res.data.data);
      setData(res.data.data)
      
  
  }
  useEffect(()=>{
    handleFetch()
  },[])
  const handleChange=(e)=>{
    // console.log(e);
    if(e.target.type=="file"){
      setForm(()=>({...form,[e.target.name]:e.target.files[0]}))
    }
    else{
        setForm(()=>({...form,[e.target.name]:e.target.value}))
    }
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post('http://localhost:5000/api/content/upload', form,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    });
    console.log(res);
  }
  console.log(form);
  
  return (
   <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-12">
      <div className="card shadow">
        <div className="card-header text-center bg-dark text-white">
          Upload Content
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Text input */}
            <div className="mb-3">
                    <label htmlFor="skill" className="form-label">Enter Your Skill Here</label>
              <select name="skillId" onChange={handleChange} className='form-control' id="">
                <option value="" >--Select Skill--</option>
                {data.map((item,i)=>(
                  <option value={item._id}>{item.skill}</option>
                ))}
              </select>
            </div>

            {/* File input */}
            <div className="mb-3">
              <label htmlFor="profilePic" className="form-label">Select Content File</label>
              <input 
                type="file" 
                className="form-control" 
                id="profilePic"
                name='content' 
                onChange={handleChange}
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary mt-4 w-100">
              Upload Content
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* table start */}
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
            {/* {skills.map((item, i) => ( */}
              <tr >
                {/* <td>{i + 1}</td>
                <td>{item.skill}</td>
                <td>{item.description}</td> */}
                <td>
                  {/* <button className="btn btn-sm btn-primary me-2">Edit</button> */}
                  <button 
                    className="btn btn-sm btn-primary" 
                    // onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            {/* ))}  */}
          </tbody>
        </table>
      </div>
  {/* table end */}
</div>


  )
}

export default Content  