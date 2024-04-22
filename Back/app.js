const express = require('express')
const dontenv = require('dotenv')
const mongoose = require('mongoose')

dontenv.config({path:'./config.env'})

const app = express()

const DB = process.env.DB_URL.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

mongoose.connect(DB, {
}).then(() => console.log("DB connected"));



const port = process.env.PORT
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
})