const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const router = require('./routes/ToDoRoute');
require('dotenv').config()


const app =express()
const port=process.env.PORT || 5000;
app.use(express.json())
app.use(cors())


mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log(`DB is connected successfully`))
.catch((err)=>console.log(err.message))

app.use(router)

app.listen(port,()=>console.log(`Server is running on the port ${port}`))