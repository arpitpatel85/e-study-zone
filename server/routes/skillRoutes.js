const express=require('express')
const routes=express.Router()
const Skill=require('../models/Skill');


routes.post('/skill',async(req,res)=>{
  try{
      const {skill,description,}=req.body;
    const data=await Skill.findOne({skill:skill});
    if(data){
        return res.json({msg:"Skill already added"})
    }
    const Skills=await new Skill(req.body)
    await Skills.save();
    res.json({msg:"Skill added successfully"})
  
  }
  catch(er){
    console.log(er);
    res.json({msg:"Skill not added"})
    
  }
  
});

  routes.get('/skill', async (req, res) => {
  try {
    const data = await Skill.find();
    res.json({
      msg: "Data fetched successfully",
      data: data
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Error fetching data" });
  }
});


routes.delete('/deleteskill/:id', async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ msg: "Skill deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Delete failed" });
  }
});
//skill by id
routes.get('/getskill/:id', async (req, res) => {
  try {
    const data = await Skill.find({ userId: req.params.id });
    if (!data || data.length === 0) {
      return res.status(404).json({ msg: "No skills found for this user" });
    }
    res.json({ msg: "Successfully fetched skills", data: data });
  } catch (er) {
    console.log(er);
    res.json({ msg: "Sorry, try again" });
  }
});




module.exports=routes