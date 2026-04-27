const express = require('express')
const Admin = require('../models/Admin')
const routes = express.Router();

const token=require('jsonwebtoken')


routes.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await  Admin.findOne({ email: email });
        if (data) {
            return res.json({ msg: "Duplicate email" })
        }
        const user = await new Admin(req.body);
        res.json({ msg: "Admin registered Succesfully" })
        user.save();

    }
    catch (er) {
        console.log(er)
        res.json({ msg: "Sorry Try again" })
    }
})

//for login

routes.post('login', async(req,res)=>{
    try{
        const {email,password}=req.body;
        const isExist=await Admin.findOne({email:email})
        if(!isExist){
            return res.json({msg:"Data not found"})
        }
        if(isExist.password==password){
            const token=jwt.sign({id:isExist._id},process.env.JWT_SECRET,{expiresIN:"1d"})
            res.jsom({msg:"Login succesfully",data:{
                token:token,
                email:isExist.email,
                id:isExist._id,
                role:"admin"

            }})
        }
        else{
            res.json({msg:"Incorrect Password"})
        }
    }
    catch(er){
        console.log("Sorry Try again")
        res.json({msg:"Sorry Try again"})
    }
})
module.exports=routes;