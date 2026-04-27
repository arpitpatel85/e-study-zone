const mongoose=require('mongoose')

const handshakeSchema=mongoose.Schema({
    trainerId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    LearnerId:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        status:['pending','rejected','accepted']
    }
})
module.exports=mongoose.model("Handshake",handshakeSchema);