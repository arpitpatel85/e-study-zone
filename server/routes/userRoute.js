const express = require('express')
const User = require('../models/User')
const routes = express.Router();
const jwt=require('jsonwebtoken')

routes.post('/register', async (req, res) => {
    try {
        const { name, email, password, qualification ,role} = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            return res.json({ msg: "User already register" })
        }
        const data = await new User({
            name: name,
            email: email,
            password: password,
            qualification: qualification,
            role: role,
        })
        data.save();
        res.json({ msg: "User register Succesfully" })
    }
    catch (er) {
        console.log(er);
        res.json("user not register")
    }
})

//get user by id


routes.get('/getuser/:id', async (req, res) => {

    try {
        const data = await User.findById(req.params.id).select('name email role qualification status');
        return res.json({ msg: "Data Fetch", data: data })
    }
    catch (er) {
        console.log(er);
        res.json("User not Fetched")
    }
})

//get all user
routes.get('/getuser', async (req, res) => {
    try {
        const data = await User.find({ status: "active" }).lean()
        res.json({ msg: "Uset Fetched", data: data });
    }
    catch (er) {
        console.log(er);
        res.json({ msg: "user not  Fetched" })
    }
})

//get all inactive user
routes.get('/getuser/all/inactive', async (req, res) => {
    try {
        const data = await User.find({ status: "inactive" }).lean()
        res.json({ msg: "User Fetched", data: data });
    }
    catch (er) {
        console.log(er);
        res.json({ msg: "user not  Fetched" })
    }
})


//routes for block the  user

routes.get('/block/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, { status: 'inactive' });
        res.json({ msg: "User Blocked successsfully" })
    }
    catch (er) {
        console.log(er)
        res.json("Sorry Try again");
    }
})
//routes for unblock user
routes.get('/unblock/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, { status: 'active' });
        res.json({ msg: "User Unblocked successsfully" })
    }
    catch (er) {
        console.log(er)
        res.json("Sorry Try again");
    }
})



//Login api

routes.post('/login',async(req,res)=>{
    
    try{
        const {email,password}=req.body;
        const data=await User.findOne({email:email})
        if(!data){
            return res.json({msg:"Email is Incorrect"})
        }
        if(data.password==password){
            const token=jwt.sign({id:data._id},process.env.JWT_SECRET,{expiresIn:"1d"})
            res.json({msg:"Login Successfully",data:{
                token,
                id: data._id,
                role: data.role,
                email: data.email,
                name: data.name
            }});
        }else{
            res.json({msg:"Password is Incorrect"})
        }
    }
    catch(er){
        console.log(er);
        
        res.json({msg:"Sorry try again"})
    }
});


// For password reset
routes.post('/changepassword', async (req, res) => {
  try {
    const { userId, oldPassword, newPassword, confirmPassword } = req.body;

    // check confirm password
    if (newPassword !== confirmPassword) {
      return res.json({ msg: "New password and confirm password do not match" });
    }

    // find user
    const user = await User.findById(userId);
    if (!user) {
      return res.json({ msg: "User not found" });
    }

    // check old password 
    if (user.password !== oldPassword) {
      return res.json({ msg: "Old password is incorrect" });
    }

    // update password
    user.password =confirmPassword;
    await user.save();

    res.json({ msg: "Password changed successfully" });
  } catch (er) {
    console.log(er);
    res.json({ msg: "Server error" });
  }
});



routes.get('/getuser/learner/:id', async (req, res) => {
  try {
    // Extract learner ID from URL params
    const learnerId = req.params.id;

    // Fetch learner by ID from MongoDB
    const data = await User.findById(learnerId);

    if (!data) {
      return res.status(404).json({ message: "Learner not found" });
    }

    // Send learner profile data
    res.json({
      name: data.name,
      email: data.email,
      role: data.role,
      qualification: data.qualification
    });

  } catch (er) {
    console.error(er);
    res.status(500).json({ message: "Server error" });
  }
});


//for get user  profile for edit his profile





module.exports = routes;