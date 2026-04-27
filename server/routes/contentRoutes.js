const express=require('express')
const routes=express.Router();
const Content=require('../models/Content')
const path =require('path')
const multer=require('multer')
const upload=multer.diskStorage({
    destination:(req,file,cb)=>{
cb(null,path.join("./public/upload/"))
    },
    filename:(req,file,cb)=>{
cb(null,file.originalname)
    } 
});
const uploadFile=multer({storage:upload})

routes.post('/upload',uploadFile.single('content'),async(req,res)=>{
   try{
     const {skillId,content ,userId}=req.body;
     const data =await new Content({
        skillId:skillId,
        file:req.file.path,
        userId:userId
     })
     data.save();
     res.json("Content Upload successfully");
   }
   catch(er){
    console.log(er);
    
  res.json("unable to upload content")
   }
});






// get content by userId
routes.get('/get/:id', async (req, res) => {
  try {
    const data = await Content.find({ userId: req.params.id }).populate('skillId') // use find instead of findOne
      
    res.json({ msg: "Successfully fetched content", data })
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Sorry, try again" })
  }
})

// delete content bu id

routes.delete('/delete/:id', async (req, res) => {
  try {
    const data = await Content.findByIdAndDelete( req.params.id )
      
    res.json({ msg: "Successfully Delete Content",})
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: "Sorry, try again" })
  }
})
module.exports=routes;