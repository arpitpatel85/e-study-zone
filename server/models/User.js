const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true 
    },
    email:{ 
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    picture:{
        type:String
    },
    skills:{
        type:String
    },
    role:{
        type:String,
        enum:["Trainer", "Learner"],
        default:"Learner"
    }
},{
    timestamps:true
})
module.exports=mongoose.model("User",userSchema);