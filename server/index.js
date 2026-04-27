const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv');
const MongoDB=require('./config/db')
const app=express();
dotenv.config()
app.use(cors())
app.use(express.json())
MongoDB();
//api started

app.use('/api/user',require('./routes/userRoute'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/skill',require('./routes/skillRoutes'))
app.use('/api/content',require('./routes/contentRoutes'))

//api ended
app.use('/api/public',express.static('public'))



app.listen(process.env.PORT,()=>{
 console.log("server is running on http://localhost:5000")
})