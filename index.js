import express from "express";
import 'dotenv/config'


const app=express(); 

const port=process.env.PORT; 


  
app.listen(8000,()=>{console.log("SERVER STARTED at ",port)});