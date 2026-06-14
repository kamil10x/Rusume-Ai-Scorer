require("dotenv").config();

const express = require("express");
const cors = require('cors');

//const express = require('express');

const app = express();
const PORT = 4000;

require('./conn');
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))

const userRoutes = require('./Routes/user');
const ResumeRoutes = require('./Routes/resume');


app.use('/api/user', userRoutes)
app.use('/api/resume', ResumeRoutes)
/*
app.get('/', (req, res)=>{
    res.send({
        message:"Hi welcome kamil to backend"
    })
})*/

app.listen(PORT, ()=>{
    console.log("Backend is running on port ", PORT);
})