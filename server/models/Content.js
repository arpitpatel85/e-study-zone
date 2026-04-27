const mongoose=require('mongoose')
const contentSchema=mongoose.Schema({
    skillId:{
    type:mongoose.Schema.ObjectId,
    ref:'Skill'
    },
    file:{
        type:String
    },
    status:{
        type:String,
        enum:['draft' ,'publish']
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
},{
    timesstamp:true
});
module.exports=mongoose.model("Content",contentSchema)